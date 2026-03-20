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
import LoadingSpinner from '../components/LoadingSpinner';
import ThemeToggle from '../components/ThemeToggle';
import { useHapticFeedback } from '../hooks/useHapticFeedback';
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
const OptionBtn = memo(function OptionBtn({ option, index, selected, onSelect, disabled, practiceMode, showPracticeFeedback, isCorrect }) {
  const letters = ['A', 'B', 'C', 'D'];
  
  let practiceClass = '';
  if (practiceMode && showPracticeFeedback) {
    if (selected && isCorrect) practiceClass = 'correct';
    else if (selected && !isCorrect) practiceClass = 'incorrect';
    else if (!selected && isCorrect) practiceClass = 'correct-unselected';
  }

  return (
    <button
      className={`option-btn ${selected ? 'selected' : ''} ${practiceClass}`}
      onClick={() => !disabled && onSelect(index)}
      disabled={disabled || (practiceMode && showPracticeFeedback)}
      aria-pressed={selected}
    >
      <span className="option-letter">{letters[index]}</span>
      <span>{option}</span>
    </button>
  );
});

const QuestionCard = memo(function QuestionCard({
  question, questionIndex, total, selectedAnswer, onSelect, practiceMode
}) {
  const showPracticeFeedback = selectedAnswer !== undefined;

  return (
    <div className="question-card animate-slide">
      <div className="question-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
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
            practiceMode={practiceMode}
            showPracticeFeedback={showPracticeFeedback}
            isCorrect={question.answer === i}
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
// isOnCooldown is unused but kept for future rate-limiting feature
// function isOnCooldown(subj) {
//   try {
//     const ts = localStorage.getItem(getCooldownKey(subj));
//     if (!ts) return false;
//     return Date.now() - Number(ts) < COOLDOWN_MS;
//   } catch { return false; }
// }
function setCooldown(subj) {
  try { localStorage.setItem(getCooldownKey(subj), String(Date.now())); } catch {
    // best-effort cooldown only
  }
}

// ── Duplicate tab lock ──
const LOCK_KEY = (subj) => `qt_exam_lock_${subj}`;
const LOCK_STALE_MS = 15000;
const LOCK_HEARTBEAT_MS = 4000;

function readLock(subj) {
  try {
    const raw = localStorage.getItem(LOCK_KEY(subj));
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function writeLock(subj, lock) {
  try {
    localStorage.setItem(LOCK_KEY(subj), JSON.stringify(lock));
  } catch {
    // best-effort lock only
  }
}

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
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [timeAttack, setTimeAttack] = useState(false);
  const [practiceMode, setPracticeMode] = useState(false);
  const [hideNav, setHideNav] = useState(true);
  const [autoNextParam, setAutoNextParam] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null);
  const [duplicateTab, setDuplicateTab] = useState(false);
  const [hasSessionLock, setHasSessionLock] = useState(true);
  const [warningPopup, setWarningPopup] = useState(null);
  const autoNextTimerRef = useRef(null);

  const sessionIdRef = useRef(`sess_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`);
  const startedAtRef = useRef(Date.now());
  const perfStartedAtRef = useRef(performance.now());
  const visibilitySwitchesRef = useRef(0);
  const hiddenCountRef = useRef(0);
  const blurCountRef = useRef(0);
  const focusCountRef = useRef(0);
  const duplicateDetectedRef = useRef(false);
  const lastWarningAtRef = useRef(0);
  
  const { triggerHaptic } = useHapticFeedback();

  const showWarningPopup = useCallback((message) => {
    setWarningPopup({ message, ts: Date.now() });
  }, []);

  useEffect(() => {
    if (!warningPopup) return;
    const timer = setTimeout(() => setWarningPopup(null), 2600);
    return () => clearTimeout(timer);
  }, [warningPopup]);

  useEffect(() => () => {
    if (autoNextTimerRef.current) clearTimeout(autoNextTimerRef.current);
  }, []);

  // Duplicate tab/session lock hardening
  useEffect(() => {
    const sessionId = sessionIdRef.current;

    const attemptAcquire = () => {
      const now = Date.now();
      const existing = readLock(subject);
      const isStale = !existing || now - Number(existing.ts || 0) > LOCK_STALE_MS;
      const isMine = existing && existing.owner === sessionId;

      if (isMine || isStale) {
        writeLock(subject, { owner: sessionId, ts: now });
        setHasSessionLock(true);
        setDuplicateTab(false);
        return true;
      }

      duplicateDetectedRef.current = true;
      setHasSessionLock(false);
      setDuplicateTab(true);
      showWarningPopup('Warning: duplicate session detected. Keep only one exam tab open.');
      return false;
    };

    attemptAcquire();

    const onStorage = (event) => {
      if (event.key !== LOCK_KEY(subject)) return;
      const current = readLock(subject);
      if (current && current.owner !== sessionId) {
        duplicateDetectedRef.current = true;
        setHasSessionLock(false);
        setDuplicateTab(true);
        showWarningPopup('Warning: session lock transferred to another tab/window.');
      }
    };

    window.addEventListener('storage', onStorage);

    const interval = setInterval(() => {
      const now = Date.now();
      const current = readLock(subject);
      if (current && current.owner === sessionId) {
        writeLock(subject, { owner: sessionId, ts: now });
        setHasSessionLock(true);
        return;
      }
      attemptAcquire();
    }, LOCK_HEARTBEAT_MS);

    return () => {
      clearInterval(interval);
      window.removeEventListener('storage', onStorage);
      const current = readLock(subject);
      if (current && current.owner === sessionId) {
        localStorage.removeItem(LOCK_KEY(subject));
      }
    };
  }, [subject, showWarningPopup]);

  // Track anti-cheat focus/visibility signals
  useEffect(() => {
    const maybeWarn = (message) => {
      const now = Date.now();
      if (now - lastWarningAtRef.current < 900) return;
      lastWarningAtRef.current = now;
      triggerHaptic('nudge');
      showWarningPopup(message);
    };

    const onVisibility = () => {
      visibilitySwitchesRef.current += 1;
      if (document.hidden) {
        hiddenCountRef.current += 1;
        maybeWarn(`Warning ${hiddenCountRef.current}: tab switch detected.`);
      }
    };
    const onBlur = () => {
      blurCountRef.current += 1;
      maybeWarn(`Warning: window focus lost (${blurCountRef.current}).`);
    };
    const onFocus = () => {
      focusCountRef.current += 1;
    };

    document.addEventListener('visibilitychange', onVisibility);
    window.addEventListener('blur', onBlur);
    window.addEventListener('focus', onFocus);

    return () => {
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('blur', onBlur);
      window.removeEventListener('focus', onFocus);
    };
  }, [showWarningPopup, triggerHaptic]);

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
        // Shuffle options for each question
        const processedQs = qs.map(q => {
          if (q.options && q.options.length === 2 && q.options.includes('True') && q.options.includes('False')) {
            return q;
          }
          if (q.options) {
            const shuffled = q.options.map((opt, i) => ({ opt, isAnswer: i === q.answer })).sort(() => Math.random() - 0.5);
            return {
              ...q,
              options: shuffled.map(s => s.opt),
              answer: shuffled.findIndex(s => s.isAnswer)
            };
          }
          return q;
        });

        setQuestions(processedQs);
        if (isTimeAttack && processedQs.length > 0) {
          setTimeLeft(processedQs.length * 30);
        }
        if (saved && saved.answers) {
          setAnswers(saved.answers);
          setCurrentQ(Math.min(saved.currentQ ?? 0, processedQs.length - 1));
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
        if (qs.length === 0) {
          qs = getSeedFallback();
        } else {
          qs = qs.sort(() => Math.random() - 0.5);
        }

        // Limit items if requested
        const searchParams = new URLSearchParams(location.search);
        const limitParam = searchParams.get('items');
        const isTimeAttack = searchParams.get('timeAttack') === 'true';
        const isHideNav = searchParams.get('hideNav') === 'true';
        const isPracticeMode = searchParams.get('practiceMode') === 'true';
        const isAutoNext = searchParams.get('autoNext') === 'true';
        setTimeAttack(isTimeAttack);
        setHideNav(isHideNav);
        setPracticeMode(isPracticeMode);
        setAutoNextParam(isAutoNext);
        
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
        const isPracticeMode = searchParams.get('practiceMode') === 'true';
        const isAutoNext = searchParams.get('autoNext') === 'true';
        setTimeAttack(isTimeAttack);
        setHideNav(isHideNav);
        setPracticeMode(isPracticeMode);
        setAutoNextParam(isAutoNext);

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
  }, [subject, subjectInfo, navigate, location.search]); // primitive dep (rerender-dependencies)

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
    triggerHaptic('success'); // gentle pop for selection
    setAnswers((prev) => ({ ...prev, [currentQ]: optionIndex }));
    
    // Auto-next implementation
    if (autoNextParam && currentQ < questions.length - 1) {
      if (autoNextTimerRef.current) clearTimeout(autoNextTimerRef.current);
      autoNextTimerRef.current = setTimeout(() => {
        setCurrentQ((p) => Math.min(questions.length - 1, p + 1));
      }, practiceMode ? 1200 : 350); // longer delay in practice mode to see feedback
    }
  }, [currentQ, triggerHaptic, autoNextParam, questions.length, practiceMode]);

  const handlePrev = useCallback(() => {
    triggerHaptic('nudge');
    setCurrentQ((p) => Math.max(0, p - 1));
  }, [triggerHaptic]);
  
  const handleNext = useCallback(() => {
    triggerHaptic('nudge');
    setCurrentQ((p) => Math.min(questions.length - 1, p + 1));
  }, [questions.length, triggerHaptic]);

  const validateAndConfirm = useCallback(() => {
    if (!hasSessionLock || duplicateTab) {
      setSubmitError('Another active exam session is detected for this subject. Close the other tab/window before submitting.');
      return;
    }
    setSubmitError(null);
    setShowConfirm(true);
  }, [hasSessionLock, duplicateTab]);

  const handleSubmit = useCallback(async () => {
    if (!hasSessionLock || duplicateTab) {
      setSubmitError('Submission blocked: duplicate exam session detected.');
      setShowConfirm(false);
      return;
    }

    setShowConfirm(false);
    setSubmitting(true);
    setSubmitError(null);

    const score = questions.reduce(
      (acc, q, i) => acc + (answers[i] === q.answer ? 1 : 0), 0
    );
    const percentage = Math.round((score / questions.length) * 100);

    const endedAt = Date.now();
    const perfEndedAt = performance.now();
    const elapsedWallMs = Math.max(0, endedAt - startedAtRef.current);
    const elapsedPerfMs = Math.max(0, perfEndedAt - perfStartedAtRef.current);
    const driftMs = Math.round(elapsedWallMs - elapsedPerfMs);
    const minExpectedMs = Math.max(3000, questions.length * 1200);
    const timeAnomalyFlags = {
      negativeElapsed: endedAt < startedAtRef.current,
      implausiblyFastCompletion: elapsedWallMs < minExpectedMs,
      clockDriftHigh: Math.abs(driftMs) > 15000,
    };

    const warningReasons = [];
    if (hiddenCountRef.current > 0) warningReasons.push('tab_switch_detected');
    if (blurCountRef.current > 0) warningReasons.push('focus_lost');
    if (duplicateDetectedRef.current || duplicateTab) warningReasons.push('duplicate_session');
    if (timeAnomalyFlags.implausiblyFastCompletion) warningReasons.push('implausibly_fast_completion');
    if (timeAnomalyFlags.clockDriftHigh || timeAnomalyFlags.negativeElapsed) warningReasons.push('time_anomaly');

    const warningCount =
      hiddenCountRef.current +
      blurCountRef.current +
      (duplicateDetectedRef.current || duplicateTab ? 1 : 0) +
      (timeAnomalyFlags.implausiblyFastCompletion ? 1 : 0) +
      (timeAnomalyFlags.clockDriftHigh || timeAnomalyFlags.negativeElapsed ? 1 : 0);

    const integritySignals = {
      visibilityChangeCount: visibilitySwitchesRef.current,
      tabSwitchCount: hiddenCountRef.current,
      windowBlurCount: blurCountRef.current,
      windowFocusCount: focusCountRef.current,
      duplicateSessionDetected: duplicateDetectedRef.current || duplicateTab,
      lockOwnerValidAtSubmit: hasSessionLock,
      elapsedWallMs,
      elapsedPerfMs: Math.round(elapsedPerfMs),
      clockDriftMs: driftMs,
      timeAnomalyFlags,
      warningCount,
      warningReasons,
      hasWarnings: warningCount > 0,
    };

    const resultData = {
      studentName,
      subject,
      score,
      total: questions.length,
      percentage,
      answers,
      submittedAt: serverTimestamp(),
      timeTaken: Math.round(elapsedWallMs / 1000),
      integritySignals,
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
    setSubmitted(true);

    navigate('/results', {
      state: { ...resultData, questions, subjectLabel: subjectInfo?.title },
      replace: true,
    });
  }, [answers, questions, subject, studentName, navigate, subjectInfo, hasSessionLock, duplicateTab]);

  if (loading) {
    return (
      <div className="exam-page">
        <header className="exam-header glass-header" style={{ padding: '12px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="exam-header-left" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div className="skeleton" style={{ width: 42, height: 42, borderRadius: 8 }}></div>
            <div className="skeleton" style={{ width: 160, height: 22, borderRadius: 4 }}></div>
          </div>
          <div className="exam-header-right" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
             <div className="skeleton" style={{ width: 80, height: 32, borderRadius: 8 }}></div>
             <div className="skeleton" style={{ width: 120, height: 32, borderRadius: 8 }}></div>
          </div>
        </header>

        <div className="exam-body" style={{ marginTop: 24 }}>
          {/* Progress skeleton */}
          <div className="exam-progress-wrap" style={{ marginBottom: '1.5rem' }}>
            <div className="exam-progress-top" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
              <div className="skeleton" style={{ width: 100, height: 16, borderRadius: 4 }}></div>
              <div className="skeleton" style={{ width: 40, height: 16, borderRadius: 4 }}></div>
            </div>
            <div className="progress-bar-wrap" style={{ display: 'block', background: 'transparent' }}>
              <div className="skeleton" style={{ width: '100%', height: '100%', borderRadius: 100 }}></div>
            </div>
          </div>

          {/* Question Navigator Dots Skeleton */}
          <div className="question-nav" style={{ gap: 8, display: 'flex', flexWrap: 'wrap', marginBottom: 24 }}>
             {[...Array(8)].map((_, i) => (
                <div key={i} className="skeleton" style={{ width: 36, height: 36, borderRadius: '50%' }}></div>
             ))}
          </div>

          <div className="card question-card" style={{ padding: 28 }}>
            <div className="skeleton skeleton-text" style={{ height: 20, marginBottom: 16 }}></div>
            <div className="skeleton skeleton-text short" style={{ height: 20, marginBottom: 40, width: '60%' }}></div>
            {[1, 2, 3, 4].map(i => <div key={i} className="skeleton skeleton-row" style={{ height: 56, marginBottom: 14, borderRadius: 8 }}></div>)}
          </div>
          
          <div className="exam-actions" style={{ marginTop: 24, display: 'flex', justifyContent: 'space-between' }}>
            <div className="skeleton" style={{ width: 120, height: 48, borderRadius: 8 }}></div>
            <div className="skeleton" style={{ width: 120, height: 48, borderRadius: 8 }}></div>
          </div>
        </div>
      </div>
    );
  }
  if (!subjectInfo) return null;

  const unansweredCount = questions.length - Object.keys(answers).length;
  const progressPct = Math.round((Object.keys(answers).length / questions.length) * 100);
  const currentQuestion = questionMap.get(currentQ);

  return (
    <div className="exam-page">
      {/* Hidden button for timer auto-submit to avoid dependency cycles */}
      <button id="hidden-submit-trigger" style={{ display: 'none' }} onClick={() => {
        if (!submitting && !submitted) {
          triggerHaptic('buzz'); // vibrate user on auto submit
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

      {warningPopup && (
        <div
          className="alert alert-error"
          style={{
            position: 'fixed',
            top: 78,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 350,
            minWidth: 280,
            maxWidth: 520,
            boxShadow: 'var(--shadow-md)',
          }}
        >
          <FiAlertTriangle /> {warningPopup.message}
        </div>
      )}

      <div className="exam-body">
        {duplicateTab && (
          <div className="alert alert-error" style={{ marginBottom: 14 }}>
            <FiAlertTriangle /> Duplicate exam session detected. Keep only one active tab/window for this subject.
          </div>
        )}

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
            practiceMode={practiceMode}
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
        .q-dot.flagged { border: 2px solid var(--error); background: rgba(255, 59, 48, 0.1); }
        .q-dot.flagged.current { background: var(--error); color: white; border-color: var(--error); }
        .practice-feedback { transition: all var(--transition); }
        .practice-feedback.correct { background: rgba(52, 199, 89, 0.1); border: 1px solid var(--success); color: var(--success); }
        .practice-feedback.incorrect { background: rgba(255, 59, 48, 0.1); border: 1px solid var(--error); color: var(--error); }
        @media (max-width: 768px) {
          .exam-page {
            overflow: hidden;
            height: 100vh;
            height: 100dvh; /* dvh for better mobile browser support */
            display: flex;
            flex-direction: column;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100vw;
          }
          .exam-header {
            padding: 10px 12px;
            gap: 6px;
            flex-shrink: 0;
            border-bottom: 1px solid var(--border);
          }
          .exam-header-left { gap: 8px; }
          .exam-subject-title { font-size: 0.82rem; }
          .exam-body {
            padding: 0;
            display: flex;
            flex-direction: column;
            flex: 1;
            overflow: hidden;
            max-height: 100%;
          }
          .exam-progress-wrap { padding: 16px 16px 0; margin-bottom: 8px; flex-shrink: 0; }
          .question-nav {
            padding: 0 16px;
            margin-bottom: 12px;
            flex-shrink: 0;
            overflow-x: auto;
            overflow-y: hidden;
            -webkit-overflow-scrolling: touch;
          }
          .question-card {
            margin-bottom: 0;
            border-radius: 0;
            border-left: none;
            border-right: none;
            flex: 1;
            display: flex;
            flex-direction: column;
            background: transparent;
            box-shadow: none;
            padding: 16px;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            max-height: 100%;
          }
          .question-text { font-size: 1rem; margin-bottom: 16px; line-height: 1.5; }
          .options-list {
            margin-top: auto;
            background: var(--bg-card);
            padding: 16px;
            border-radius: var(--radius-xl) var(--radius-xl) 0 0;
            box-shadow: 0 -4px 24px rgba(0,0,0,0.06);
            gap: 8px;
            margin-left: -16px;
            margin-right: -16px;
            margin-bottom: -16px;
            border-top: 1px solid var(--border);
            flex-shrink: 0;
          }
          .option-btn {
            padding: 12px 14px;
            font-size: 0.9rem;
          }
          .exam-actions {
            gap: 6px;
            padding: 12px 16px;
            background: var(--bg-card);
            margin: 0;
            flex-shrink: 0;
            border-top: 1px solid var(--border);
          }
          .exam-actions .btn { flex: 1; justify-content: center; font-size: 0.85rem; padding: 10px 12px; }
          .submit-section {
            margin-top: 0;
            padding: 24px 16px;
            background: var(--bg-card);
            flex-shrink: 0;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
          }
        }
        @media (max-width: 480px) {
          .exam-header-right {
            font-size: 0.75rem;
          }
          .exam-timer {
            font-size: 0.85rem;
            padding: 4px 8px;
          }
          .exam-progress-text {
            font-size: 0.7rem;
            padding: 4px 8px;
          }
          .question-text {
            font-size: 0.95rem;
          }
          .option-btn {
            padding: 10px 12px;
            font-size: 0.85rem;
          }
          .option-letter {
            width: 24px;
            height: 24px;
            font-size: 0.7rem;
          }
        }
      `}</style>
    </div>
  );
}
