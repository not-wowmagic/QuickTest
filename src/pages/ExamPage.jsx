// src/pages/ExamPage.jsx
// Performance rules applied:
//   - rerender-use-ref-transient-values: timer tick in ref
//   - rerender-functional-setstate: timer countdown
//   - rerender-memo: QuestionCard memoized
//   - js-cache-storage: versioned localStorage schema (client-localstorage-schema)
//   - js-set-map-lookups: question lookup by Map
//   - rerender-no-inline-components: all child components defined outside

import { useState, useEffect, useRef, useCallback, useMemo, memo } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import {
  collection, getDocs, query, where, addDoc, serverTimestamp,
} from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { SUBJECTS } from '../data/seedQuestions';
import { useWebHaptics } from 'web-haptics/react';
import LoadingSpinner from '../components/LoadingSpinner';
import ThemeToggle from '../components/ThemeToggle';
import {
  FiChevronLeft, FiChevronRight, FiSend,
  FiAlertTriangle, FiCheckCircle, FiLoader,
  FiX, FiClock
} from 'react-icons/fi';

// ── LocalStorage helpers (js-cache-storage rule) ──
const LS_VERSION = 1;
const LS_KEY = (subject) => `exam_progress_v${LS_VERSION}_${subject}`;

// Cache the parsed localStorage value in memory per subject
const _lsCache = new Map(); // js-set-map-lookups

function loadProgress(subject) {
  if (_lsCache.has(subject)) return _lsCache.get(subject);
  try {
    const raw = localStorage.getItem(LS_KEY(subject));
    const parsed = raw ? JSON.parse(raw) : null;
    _lsCache.set(subject, parsed);
    return parsed;
  } catch {
    return null;
  }
}

function saveProgress(subject, data) {
  const value = { v: LS_VERSION, ...data };
  _lsCache.set(subject, value);
  try {
    localStorage.setItem(LS_KEY(subject), JSON.stringify(value));
  } catch { /* quota exceeded — fail silently */ }
}

function clearProgress(subject) {
  _lsCache.delete(subject);
  localStorage.removeItem(LS_KEY(subject));
}

// ── Memoized child components (rerender-no-inline-components) ──
const OptionBtn = memo(function OptionBtn({ option, index, selected, onSelect, disabled }) {
  const letters = ['A', 'B', 'C', 'D'];
  return (
    <button
      className={`option-btn ${selected ? 'selected' : ''}`}
      onClick={() => !disabled && onSelect(index)}
      disabled={disabled}
      aria-pressed={selected}
    >
      <span className="option-letter">{letters[index]}</span>
      <span>{option}</span>
    </button>
  );
});

const QuestionCard = memo(function QuestionCard({
  question, questionIndex, total, selectedAnswer, onSelect,
}) {
  return (
    <div className="question-card animate-slide">
      <div className="question-header">
        <span className="q-number">Question {questionIndex + 1} of {total}</span>
      </div>
      <p className="question-text">{question.text}</p>
      <div className="options-list">
        {question.options.map((opt, i) => (
          <OptionBtn
            key={i}
            option={opt}
            index={i}
            selected={selectedAnswer === i}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
});

// Timer removed

// ── Rate limiting helpers ──
const COOLDOWN_MS = 10 * 60 * 1000; // 10 minutes
function getCooldownKey(subj) { return `qt_cooldown_${subj}`; }
function isOnCooldown(subj) {
  try {
    const ts = localStorage.getItem(getCooldownKey(subj));
    if (!ts) return false;
    return Date.now() - Number(ts) < COOLDOWN_MS;
  } catch { return false; }
}
function setCooldown(subj) {
  try { localStorage.setItem(getCooldownKey(subj), String(Date.now())); } catch {}
}

// ── Duplicate tab lock ──
const LOCK_KEY = (subj) => `qt_exam_lock_${subj}`;

// ── Main ExamPage ──
export default function ExamPage() {
  const { subject } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const subjectInfo = SUBJECTS[subject];

  // Read student name from URL params (set by StudentSite modal)
  const searchParams = new URLSearchParams(location.search);
  const studentName = decodeURIComponent(searchParams.get('name') || '') || 'Anonymous';

  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [timeAttack, setTimeAttack] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null);
  const [duplicateTab, setDuplicateTab] = useState(false);
  
  const { trigger } = useWebHaptics();

  // Duplicate tab detection
  useEffect(() => {
    const key = LOCK_KEY(subject);
    const existing = localStorage.getItem(key);
    if (existing && Date.now() - Number(existing) < 60000) {
      setDuplicateTab(true);
    }
    localStorage.setItem(key, String(Date.now()));
    const interval = setInterval(() => {
      localStorage.setItem(key, String(Date.now()));
    }, 5000);
    return () => {
      clearInterval(interval);
      localStorage.removeItem(key);
    };
  }, [subject]);

  // Build question lookup map (js-set-map-lookups / js-index-maps)
  const questionMap = useMemo(
    () => new Map(questions.map((q, i) => [i, q])),
    [questions]
  );

  // Load questions
  useEffect(() => {
    if (!subjectInfo) { navigate('/'); return; }

    const saved = loadProgress(subject);

    async function fetchQuestions() {
      // Helper: build seed fallback
      const getSeedFallback = () =>
        subjectInfo ? [...subjectInfo.questions].sort(() => Math.random() - 0.5) : [];

      const applyQuestions = (qs, isTimeAttack) => {
        setQuestions(qs);
        if (isTimeAttack && qs.length > 0) {
          setTimeLeft(qs.length * 30);
        }
        if (saved && saved.answers) {
          setAnswers(saved.answers);
          setCurrentQ(Math.min(saved.currentQ ?? 0, qs.length - 1));
        }
      };

      try {
        // Race Firestore against a 3-second timeout — falls back to seed data
        // if Firebase isn't configured or the network is unavailable
        const timeout = new Promise((_, reject) =>
          setTimeout(() => reject(new Error('timeout')), 3000)
        );
        const q = query(collection(db, 'questions'), where('subject', '==', subject));
        const snap = await Promise.race([getDocs(q), timeout]);
        let qs = snap.docs.map((d) => ({ id: d.id, ...d.data() }));

        // If Firestore returned but is empty, use seed data
        if (qs.length === 0) qs = getSeedFallback();

        // Limit items if requested
        const searchParams = new URLSearchParams(location.search);
        const limitParam = searchParams.get('items');
        const isTimeAttack = searchParams.get('timeAttack') === 'true';
        const isHideNav = searchParams.get('hideNav') === 'true';
        setTimeAttack(isTimeAttack);
        setHideNav(isHideNav);
        
        if (limitParam && limitParam !== 'all') {
          const limit = parseInt(limitParam, 10);
          if (!isNaN(limit) && limit > 0) {
            qs = qs.slice(0, limit);
          }
        }
        
        applyQuestions(qs, isTimeAttack);
      } catch {
        // Timeout OR any error → immediate seed fallback
        let qs = getSeedFallback();
        const searchParams = new URLSearchParams(location.search);
        const limitParam = searchParams.get('items');
        const isTimeAttack = searchParams.get('timeAttack') === 'true';
        const isHideNav = searchParams.get('hideNav') === 'true';
        setTimeAttack(isTimeAttack);
        setHideNav(isHideNav);

        if (limitParam && limitParam !== 'all') {
          const limit = parseInt(limitParam, 10);
          if (!isNaN(limit) && limit > 0) {
            qs = qs.slice(0, limit);
          }
        }
        applyQuestions(qs, isTimeAttack);
      } finally {
        setLoading(false);
      }
    }

    fetchQuestions();
  }, [subject]); // primitive dep (rerender-dependencies)

  // Persist progress to localStorage whenever answers or currentQ changes
  useEffect(() => {
    if (questions.length > 0) {
      saveProgress(subject, { answers, currentQ });
    }
  }, [answers, currentQ, subject, questions.length]);

  // Timer countdown
  useEffect(() => {
    if (timeAttack && timeLeft !== null && timeLeft > 0 && !submitted && !submitting) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            // Handle auto-submit via a separate path or safely calling handleSubmit if stable
            // We'll trust handleSubmit is stable via useCallback
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeAttack, timeLeft, submitted, submitting]);
  
  // Auto-submit when timer hits exactly 0
  useEffect(() => {
    if (timeAttack && timeLeft === 0 && !submitted && !submitting && questions.length > 0) {
       // We can dynamically call submit logic here to avoid deep dependency cycles
       const fakeSubmitBtn = document.getElementById('hidden-submit-trigger');
       if (fakeSubmitBtn) fakeSubmitBtn.click();
    }
  }, [timeLeft, timeAttack, submitted, submitting, questions.length]);

  // Stable answer selection callback (rerender-functional-setstate)
  const handleSelect = useCallback((optionIndex) => {
    trigger('success'); // gentle pop for selection
    setAnswers((prev) => ({ ...prev, [currentQ]: optionIndex }));
  }, [currentQ, trigger]);

  const handlePrev = useCallback(() => {
    trigger('nudge');
    setCurrentQ((p) => Math.max(0, p - 1));
  }, [trigger]);
  
  const handleNext = useCallback(() => {
    trigger('nudge');
    setCurrentQ((p) => Math.min(questions.length - 1, p + 1));
  }, [questions.length, trigger]);

  const validateAndConfirm = useCallback(() => {
    if (isOnCooldown(subject)) {
      setSubmitError('Please wait 10 minutes between submissions for the same subject.');
      return;
    }
    setSubmitError(null);
    setShowConfirm(true);
  }, [subject]);

  const handleSubmit = useCallback(async () => {
    setShowConfirm(false);
    setSubmitting(true);
    setSubmitError(null);

    const score = questions.reduce(
      (acc, q, i) => acc + (answers[i] === q.answer ? 1 : 0), 0
    );
    const percentage = Math.round((score / questions.length) * 100);

    const resultData = {
      studentName,
      subject,
      score,
      total: questions.length,
      percentage,
      answers,
      submittedAt: serverTimestamp(),
      timeTaken: 0,
    };

    try {
      const timeout = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('timeout')), 3000)
      );
      await Promise.race([addDoc(collection(db, 'results'), resultData), timeout]);
    } catch {
      // Non-blocking — continue to results even if save fails
    }

    setCooldown(subject);
    clearProgress(subject);

    navigate('/results', {
      state: { ...resultData, questions, subjectLabel: subjectInfo?.title },
      replace: true,
    });
  }, [answers, questions, subject, studentName, navigate, subjectInfo]);

  if (loading) return <LoadingSpinner message="Loading questions…" />;
  if (!subjectInfo) return null;

  const unansweredCount = questions.length - Object.keys(answers).length;
  const progressPct = Math.round((Object.keys(answers).length / questions.length) * 100);
  const currentQuestion = questionMap.get(currentQ);

  return (
    <div className="exam-page">
      {/* Hidden button for timer auto-submit to avoid dependency cycles */}
      <button id="hidden-submit-trigger" style={{ display: 'none' }} onClick={() => {
        if (!submitting && !submitted) {
          trigger('buzz'); // vibrate user on auto submit
          handleSubmit();
        }
      }} />

      {/* Top bar */}
      <header className="exam-header glass-header">
        <div className="exam-header-left">
          <button className="btn btn-outline btn-icon" onClick={() => navigate('/')} title="Exit Exam">
            <FiX />
          </button>
          <span className="exam-subject-title">{subjectInfo.title}</span>
        </div>
        <div className="exam-header-right">
          {timeAttack && timeLeft !== null && (
            <div className={`exam-timer ${timeLeft < 60 ? 'timer-warning' : ''}`}>
              <FiClock /> {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </div>
          )}
          <div className="exam-progress-text">
            <span>{Object.keys(answers).length}</span> / {questions.length} Answered
          </div>
          <ThemeToggle />
        </div>
      </header>

      <div className="exam-body">
        {/* Progress header */}
        <div className="exam-progress-wrap">
          <div className="exam-progress-top">
            <span className="text-muted" style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              {Object.keys(answers).length} / {questions.length} answered
            </span>
            <span style={{ fontSize: '0.82rem', color: 'var(--accent)', fontWeight: 600 }}>
              {progressPct}%
            </span>
          </div>
          <div className="progress-bar-wrap">
            <div className="progress-bar-fill" style={{ width: `${progressPct}%` }} />
          </div>
        </div>

        {/* Question dot navigator */}
        {!hideNav && (
          <div className="question-nav">
            {questions.map((_, i) => (
              <button
                key={i}
                className={`q-dot ${i === currentQ ? 'current' : answers[i] !== undefined ? 'answered' : ''}`}
                onClick={() => setCurrentQ(i)}
                aria-label={`Go to question ${i + 1}`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}

        {/* Question Card */}
        {currentQuestion && (
          <QuestionCard
            question={currentQuestion}
            questionIndex={currentQ}
            total={questions.length}
            selectedAnswer={answers[currentQ]}
            onSelect={handleSelect}
          />
        )}

        {/* Navigation buttons */}
        <div className="exam-actions">
          <button className="btn btn-outline" onClick={handlePrev} disabled={currentQ === 0}>
            <FiChevronLeft /> Previous
          </button>
          {currentQ < questions.length - 1 && (
            <button className="btn btn-primary" onClick={handleNext}>
              Next <FiChevronRight />
            </button>
          )}
        </div>

        {/* Submission area - Only show on last question */}
        {currentQ === questions.length - 1 && (
          <div className="submit-section">
            <h4 style={{ marginBottom: 16, fontSize: '1.05rem', borderBottom: '1px solid var(--border)', paddingBottom: 12 }}>Submit Your Exam</h4>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: 16 }}>Submitting as <strong style={{ color: 'var(--text-primary)' }}>{studentName}</strong></p>
          {unansweredCount > 0 && (
            <div className="alert alert-info" style={{ marginBottom: 16, borderLeftColor: 'var(--primary)' }}>
              <FiAlertTriangle style={{ color: 'var(--primary)' }} />
              {unansweredCount} question{unansweredCount > 1 ? 's' : ''} unanswered
            </div>
          )}
          {submitError && <div className="alert alert-error">{submitError}</div>}
          <button
            className="btn btn-primary btn-lg"
            style={{ width: '100%', marginTop: 8 }}
            onClick={validateAndConfirm}
            disabled={submitting}
          >
            {submitting ? <><FiLoader size={14} className="spin-icon" /> Submitting…</> : <><FiSend size={14} /> Submit Exam</>}
          </button>
          </div>
        )}
      </div>

      {/* Confirm dialog */}
      {showConfirm && (
        <div className="modal-overlay" onClick={() => setShowConfirm(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Confirm Submission</h3>
              <button className="btn btn-outline btn-sm" onClick={() => setShowConfirm(false)}>✕</button>
            </div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 20 }}>
              You have answered <strong style={{ color: 'var(--text-primary)' }}>
                {Object.keys(answers).length}
              </strong> of <strong style={{ color: 'var(--text-primary)' }}>{questions.length}</strong> questions.
              {unansweredCount > 0 && ` ${unansweredCount} will be marked incorrect.`}
            </p>
            <div className="flex gap-2">
              <button className="btn btn-outline" style={{ flex: 1 }} onClick={() => setShowConfirm(false)}>
                Continue Reviewing
              </button>
              <button className="btn btn-primary" style={{ flex: 1 }} onClick={() => handleSubmit(false)} disabled={submitting}>
                {submitting ? <><FiLoader size={14} className="spin-icon" /> Submitting…</> : <><FiCheckCircle size={14} /> Confirm Submit</>}
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .exam-page { min-height: 100vh; background: var(--bg-base); }
        .spin-icon { animation: spin 1.2s linear infinite; }
        @keyframes spin { 100% { transform: rotate(360deg); } }
        .exam-nav {
          display: flex; align-items: center; justify-content: space-between;
          padding: 14px 24px; border-bottom: 1px solid var(--border);
          background: rgba(248, 244, 238, 0.92); backdrop-filter: blur(12px);
          position: sticky; top: 0; z-index: 50;
        }
        .exam-nav-left { display: flex; align-items: center; gap: 12px; }
        .exam-subject-badge { font-size: 0.9rem; font-weight: 600; font-family: var(--font-heading); }
        .exam-body { max-width: 760px; margin: 0 auto; padding: 32px 20px 80px; }
        .exam-progress-wrap { margin-bottom: 24px; }
        .exam-progress-top { display: flex; justify-content: space-between; margin-bottom: 8px; }
        .question-card { margin-bottom: 28px; }
        .question-header { margin-bottom: 12px; }
        .q-number { font-size: 0.8rem; font-weight: 600; color: var(--accent); text-transform: uppercase; letter-spacing: 0.08em; }
        .question-text { font-size: 1.1rem; font-weight: 500; line-height: 1.65; margin-bottom: 24px; }
        .options-list { display: flex; flex-direction: column; gap: 10px; }
        .exam-actions { display: flex; justify-content: space-between; align-items: center; margin: 24px 0; }
        .submit-section { margin-top: 40px; }
        @media (max-width: 480px) {
          .exam-nav { padding: 12px 14px; }
          .exam-body { padding: 20px 14px 80px; }
          .question-text { font-size: 1rem; }
          .exam-actions { gap: 8px; }
          .exam-actions .btn { flex: 1; justify-content: center; }
        }
      `}</style>
    </div>
  );
}
