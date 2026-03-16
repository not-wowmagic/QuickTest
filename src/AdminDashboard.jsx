// src/AdminDashboard.jsx
// Secure admin dashboard — accessed only via PrivateRoute (Firebase Auth)
// Features: Overview stats, Question CRUD, Results table
// Performance: useCallback, useMemo, no inline components (rerender rules)

import { useState, useEffect, useCallback, useMemo, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import {
  collection, getDocs, addDoc, updateDoc, deleteDoc,
  doc, query, orderBy, serverTimestamp, onSnapshot
} from 'firebase/firestore';
import {
  Chart as ChartJS,
  CategoryScale, LinearScale, BarElement,
  Tooltip, Legend, ArcElement,
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import { auth, db } from './firebaseConfig';
import { SUBJECTS } from './data/seedQuestions';
import {
  FiGrid, FiBook, FiUsers, FiLogOut, FiPlus,
  FiEdit2, FiTrash2, FiAlertCircle, FiCheckCircle,
  FiSearch, FiAward, FiBarChart2, FiUploadCloud,
} from 'react-icons/fi';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, ArcElement);

// ── Hoisted static chart options ──
const BAR_OPTS = {
  responsive: true, maintainAspectRatio: false,
  plugins: { legend: { display: false } },
  scales: {
    y: { beginAtZero: true, ticks: { precision: 0, color: '#9C9088' }, grid: { color: 'rgba(0,0,0,0.06)' } },
    x: { ticks: { color: '#9C9088' }, grid: { display: false } },
  },
};

const DONUT_OPTS = {
  responsive: true, maintainAspectRatio: false, cutout: '70%',
  plugins: { legend: { position: 'bottom', labels: { color: '#5C5248', boxWidth: 12, padding: 16 } } },
};

// ── Validation for question form ──
function validateQuestion(form) {
  const errors = {};
  if (!form.text.trim()) errors.text = 'Question text is required.';
  else if (form.text.trim().length < 10) errors.text = 'Question must be at least 10 characters.';
  if (!form.subject) errors.subject = 'Please select a subject.';
  const opts = form.options.map((o) => o.trim());
  if (opts.some((o) => o.length === 0)) errors.options = 'All answer options must be filled in.';
  if (new Set(opts).size !== opts.length) errors.options = 'Answer options must be unique.';
  if (form.answer < 0 || form.answer > 3) errors.answer = 'Select the correct answer.';
  return errors;
}

// ── Memoized table rows ──
const ResultRow = memo(function ResultRow({ result, index }) {
  const pct = result.percentage ?? Math.round((result.score / result.total) * 100);
  return (
    <tr>
      <td className="td-muted">{index + 1}</td>
      <td><strong style={{ color: 'var(--text-primary)' }}>{result.studentName ?? '—'}</strong></td>
      <td>{SUBJECTS[result.subject]?.title ?? result.subject}</td>
      <td>{result.score} / {result.total}</td>
      <td>
        <span className={`badge ${pct >= 60 ? 'badge-success' : 'badge-rose'}`}>{pct}%</span>
      </td>
      <td className="td-muted">
        {result.submittedAt?.toDate
          ? result.submittedAt.toDate().toLocaleString()
          : '—'}
      </td>
    </tr>
  );
});

const QuestionRow = memo(function QuestionRow({ q, index, onEdit, onDelete }) {
  return (
    <tr>
      <td className="td-muted">{index + 1}</td>
      <td style={{ maxWidth: 320 }}>
        <span style={{ color: 'var(--text-primary)', fontWeight: 500, fontSize: '0.9rem' }}>
          {q.text.length > 80 ? q.text.slice(0, 80) + '…' : q.text}
        </span>
      </td>
      <td>{SUBJECTS[q.subject]?.icon} {SUBJECTS[q.subject]?.title ?? q.subject}</td>
      <td className="td-muted">{q.options?.[q.answer] ?? '—'}</td>
      <td>
        <div className="flex gap-1">
          <button className="btn btn-outline btn-sm" onClick={() => onEdit(q)} aria-label="Edit question">
            <FiEdit2 size={13} />
          </button>
          <button className="btn btn-danger btn-sm" onClick={() => onDelete(q.id)} aria-label="Delete question">
            <FiTrash2 size={13} />
          </button>
        </div>
      </td>
    </tr>
  );
});

// ── Empty question form factory ──
const emptyForm = () => ({ text: '', subject: '', options: ['', '', '', ''], answer: 0, explanation: '' });

// ── Main Component ──
export default function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [questions, setQuestions] = useState([]);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState(null); // { type, message }
  const [showModal, setShowModal] = useState(false);
  const [editingQ, setEditingQ] = useState(null);
  const [qForm, setQForm] = useState(emptyForm());
  const [qErrors, setQErrors] = useState({});
  const [saving, setSaving] = useState(false);
  const [resultsFilter, setResultsFilter] = useState({ name: '', subject: '' });
  const [seeding, setSeeding] = useState(false);

  // Show toast helper
  const showToast = useCallback((type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 3500);
  }, []);

  // Sign out
  const handleSignOut = useCallback(async () => {
    await signOut(auth);
    navigate('/admin/login', { replace: true });
  }, [navigate]);

  // Fetch data with real-time listeners
  useEffect(() => {
    setLoading(true);
    let qLoaded = false;
    let rLoaded = false;

    const checkLoading = () => {
      if (qLoaded && rLoaded) setLoading(false);
    };

    const unsubQ = onSnapshot(collection(db, 'questions'), (snap) => {
      setQuestions(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
      qLoaded = true;
      checkLoading();
    }, () => {
      showToast('error', 'Failed to sync questions.');
      qLoaded = true;
      checkLoading();
    });

    const unsubR = onSnapshot(query(collection(db, 'results'), orderBy('submittedAt', 'desc')), (snap) => {
      setResults(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
      rLoaded = true;
      checkLoading();
    }, () => {
      showToast('error', 'Failed to sync results.');
      rLoaded = true;
      checkLoading();
    });

    return () => {
      unsubQ();
      unsubR();
    };
  }, [showToast]);

  // ── Overview chart data ──
  const subjectLabels = Object.values(SUBJECTS).map((s) => s.title);
  const subjectIds = Object.keys(SUBJECTS);

  const submissionsBarData = useMemo(() => ({
    labels: subjectLabels,
    datasets: [{
      label: 'Submissions',
      data: subjectIds.map((id) => results.filter((r) => r.subject === id).length),
      backgroundColor: ['rgba(139,92,246,0.7)', 'rgba(56,189,189,0.7)', 'rgba(251,191,36,0.7)'],
      borderRadius: 8,
    }],
  }), [results]);

  const avgScoreData = useMemo(() => ({
    labels: subjectLabels,
    datasets: [{
      label: 'Avg %',
      data: subjectIds.map((id) => {
        const r = results.filter((x) => x.subject === id);
        if (!r.length) return 0;
        return Math.round(r.reduce((s, x) => s + (x.percentage ?? 0), 0) / r.length);
      }),
      backgroundColor: ['rgba(139,92,246,0.6)', 'rgba(56,189,189,0.6)', 'rgba(251,191,36,0.6)'],
      borderRadius: 8,
    }],
  }), [results]);

  const donutData = useMemo(() => {
    const passed = results.filter((r) => r.percentage >= 60).length;
    return {
      labels: ['Passed', 'Failed'],
      datasets: [{
        data: [passed, results.length - passed],
        backgroundColor: ['rgba(74,222,128,0.8)', 'rgba(248,113,113,0.7)'],
        borderColor: ['#4ade80', '#f87171'],
        borderWidth: 2,
      }],
    };
  }, [results]);

  // ── Question CRUD ──
  const openAddModal = useCallback(() => {
    setEditingQ(null);
    setQForm(emptyForm());
    setQErrors({});
    setShowModal(true);
  }, []);

  const openEditModal = useCallback((q) => {
    setEditingQ(q);
    setQForm({ text: q.text, subject: q.subject, options: [...q.options], answer: q.answer, explanation: q.explanation ?? '' });
    setQErrors({});
    setShowModal(true);
  }, []);

  const closeModal = useCallback(() => { setShowModal(false); setEditingQ(null); }, []);

  const handleSaveQuestion = useCallback(async () => {
    const errors = validateQuestion(qForm);
    if (Object.keys(errors).length > 0) { setQErrors(errors); return; }
    setQErrors({});
    setSaving(true);

    // Sanitize inputs before Firestore write
    const payload = {
      text: qForm.text.trim(),
      subject: qForm.subject,
      options: qForm.options.map((o) => o.trim()),
      answer: Number(qForm.answer),
      explanation: qForm.explanation.trim(),
      updatedAt: serverTimestamp(),
    };

    try {
      if (editingQ) {
        await updateDoc(doc(db, 'questions', editingQ.id), payload);
        showToast('success', 'Question updated.');
      } else {
        payload.createdAt = serverTimestamp();
        await addDoc(collection(db, 'questions'), payload);
        showToast('success', 'Question added.');
      }
      closeModal();
    } catch {
      showToast('error', 'Failed to save question.');
    } finally {
      setSaving(false);
    }
  }, [qForm, editingQ, closeModal, showToast]);

  const handleDeleteQuestion = useCallback(async (id) => {
    if (!window.confirm('Delete this question? This cannot be undone.')) return;
    try {
      await deleteDoc(doc(db, 'questions', id));
      showToast('success', 'Question deleted.');
    } catch {
      showToast('error', 'Failed to delete question.');
    }
  }, [showToast]);

  // ── Seed questions from seed data ──
  const handleSeedQuestions = useCallback(async () => {
    const allQuestions = Object.values(SUBJECTS).flatMap(s => s.questions || []);
    if (allQuestions.length === 0) {
      showToast('error', 'No seed questions found in data.');
      return;
    }
    
    if (!window.confirm(`Seed ${allQuestions.length} sample questions to Firestore?`)) return;
    setSeeding(true);
    try {
      const batch = allQuestions.map((q) => {
        // Map data structure properly without carrying predefined IDs over identically unless we want to map them
        return addDoc(collection(db, 'questions'), {
          text: q.text,
          subject: q.subject ?? Object.keys(SUBJECTS).find(k => SUBJECTS[k].questions?.includes(q)),
          options: q.options,
          answer: q.answer,
          explanation: q.explanation ?? '',
          createdAt: serverTimestamp() 
        });
      });
      await Promise.all(batch);
      showToast('success', `${allQuestions.length} questions seeded!`);
    } catch (e) {
      console.error(e);
      showToast('error', 'Failed to seed questions.');
    } finally {
      setSeeding(false);
    }
  }, [showToast]);

  // ── Filtered results ──
  const filteredResults = useMemo(() => {
    return results.filter((r) => {
      const nameMatch = !resultsFilter.name || (r.studentName ?? '').toLowerCase().includes(resultsFilter.name.toLowerCase());
      const subjectMatch = !resultsFilter.subject || r.subject === resultsFilter.subject;
      return nameMatch && subjectMatch;
    });
  }, [results, resultsFilter]);

  // ── Stat numbers ──
  const stats = useMemo(() => ({
    total: results.length,
    passed: results.filter((r) => r.percentage >= 60).length,
    avgScore: results.length ? Math.round(results.reduce((s, r) => s + (r.percentage ?? 0), 0) / results.length) : 0,
    questions: questions.length,
  }), [results, questions]);

  const TABS = [
    { id: 'overview', label: 'Overview', icon: <FiGrid size={14} /> },
    { id: 'questions', label: 'Questions', icon: <FiBook size={14} /> },
    { id: 'results', label: 'Results', icon: <FiUsers size={14} /> },
  ];

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="navbar-brand" onClick={() => navigate('/')} style={{ marginBottom: 32, fontSize: '1rem', padding: '0 4px', cursor: 'pointer' }}>
          <FiAward /> QuickTest
        </div>
        {TABS.map((tab) => (
          <button
            key={tab.id}
            className={`sidebar-link ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
        <div style={{ flex: 1 }} />
        <button className="sidebar-link" onClick={handleSignOut} style={{ marginTop: 'auto', color: 'var(--error)' }}>
          <FiLogOut size={14} /> Sign Out
        </button>
      </aside>

      {/* Main content */}
      <main className="admin-content">
        {/* Toast */}
        {toast && (
          <div className={`alert ${toast.type === 'success' ? 'alert-success' : 'alert-error'}`}
            style={{ position: 'fixed', top: 20, right: 20, zIndex: 300, maxWidth: 340, animation: 'slide-up 0.2s ease' }}>
            {toast.type === 'success' ? <FiCheckCircle size={14} /> : <FiAlertCircle size={14} />}
            {toast.message}
          </div>
        )}

        {loading ? (
          <div style={{ textAlign: 'center', paddingTop: 80, color: 'var(--text-muted)' }}>Loading data…</div>
        ) : (
          <>
            {/* ── OVERVIEW TAB ── */}
            {activeTab === 'overview' && (
              <div className="animate-fade">
                <h2 style={{ marginBottom: 8 }}>Dashboard</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: 28, fontSize: '0.9rem' }}>
                  Exam activity and performance overview
                </p>

                <div className="stat-grid">
                  <div className="stat-card">
                    <div className="stat-value" style={{ color: 'var(--accent)' }}>{stats.total}</div>
                    <div className="stat-label">Total Submissions</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-value" style={{ color: 'var(--success)' }}>{stats.passed}</div>
                    <div className="stat-label">Passed</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-value" style={{ color: 'var(--warning)' }}>{stats.avgScore}%</div>
                    <div className="stat-label">Avg Score</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-value" style={{ color: 'var(--accent)' }}>{stats.questions}</div>
                    <div className="stat-label">Questions in DB</div>
                  </div>
                </div>

                <div className="charts-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20, marginBottom: 0 }}>
                  <div className="card" style={{ gridColumn: 'span 1' }}>
                    <h4 className="chart-section-title"><FiBarChart2 size={13} /> Submissions by Subject</h4>
                    <div style={{ height: 200 }}><Bar data={submissionsBarData} options={BAR_OPTS} /></div>
                  </div>
                  <div className="card" style={{ gridColumn: 'span 1' }}>
                    <h4 className="chart-section-title"><FiBarChart2 size={13} /> Avg Score by Subject</h4>
                    <div style={{ height: 200 }}><Bar data={avgScoreData} options={BAR_OPTS} /></div>
                  </div>
                  <div className="card" style={{ gridColumn: 'span 1' }}>
                    <h4 className="chart-section-title"><FiAward size={13} /> Pass/Fail Rate</h4>
                    <div style={{ height: 200 }}><Doughnut data={donutData} options={DONUT_OPTS} /></div>
                  </div>
                </div>
              </div>
            )}

            {/* ── QUESTIONS TAB ── */}
            {activeTab === 'questions' && (
              <div className="animate-fade">
                <div className="flex justify-between items-center" style={{ marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
                  <div>
                    <h2 style={{ marginBottom: 4 }}>Questions</h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>{questions.length} questions in database</p>
                  </div>
                  <div className="flex gap-2">
                    {questions.length === 0 && (
                      <button className="btn btn-outline" onClick={handleSeedQuestions} disabled={seeding}>
                        <FiUploadCloud size={14} />
                        {seeding ? 'Seeding…' : 'Seed Sample Questions'}
                      </button>
                    )}
                    <button className="btn btn-primary" onClick={openAddModal}>
                      <FiPlus size={14} /> Add Question
                    </button>
                  </div>
                </div>

                {questions.length === 0 ? (
                  <div className="card empty-state">
                    <div className="empty-state-icon">📚</div>
                    <h3 style={{ marginBottom: 8 }}>No Questions Yet</h3>
                    <p>Click "Seed Sample Questions" to load demo content, or add manually.</p>
                  </div>
                ) : (
                  <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                    <div style={{ overflowX: 'auto' }}>
                      <table className="data-table">
                        <thead>
                          <tr>
                            <th>#</th><th>Question</th><th>Subject</th><th>Correct Answer</th><th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {questions.map((q, i) => (
                            <QuestionRow key={q.id} q={q} index={i} onEdit={openEditModal} onDelete={handleDeleteQuestion} />
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ── RESULTS TAB ── */}
            {activeTab === 'results' && (
              <div className="animate-fade">
                <h2 style={{ marginBottom: 4 }}>Student Results</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: 20 }}>
                  {results.length} total submissions
                </p>
                <div className="search-bar">
                  <div style={{ position: 'relative' }}>
                    <FiSearch size={14} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                    <input
                      className="form-input"
                      style={{ paddingLeft: 36 }}
                      placeholder="Search by name…"
                      value={resultsFilter.name}
                      onChange={(e) => setResultsFilter((p) => ({ ...p, name: e.target.value }))}
                    />
                  </div>
                  <select
                    className="form-select"
                    style={{ maxWidth: 200 }}
                    value={resultsFilter.subject}
                    onChange={(e) => setResultsFilter((p) => ({ ...p, subject: e.target.value }))}
                  >
                    <option value="">All Subjects</option>
                    {Object.values(SUBJECTS).map((s) => (
                      <option key={s.id} value={s.id}>{s.title}</option>
                    ))}
                  </select>
                </div>
                {filteredResults.length === 0 ? (
                  <div className="card empty-state">
                    <div className="empty-state-icon">📋</div>
                    <p>No results found.</p>
                  </div>
                ) : (
                  <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                    <div style={{ overflowX: 'auto' }}>
                      <table className="data-table">
                        <thead>
                          <tr><th>#</th><th>Student</th><th>Subject</th><th>Score</th><th>%</th><th>Date</th></tr>
                        </thead>
                        <tbody>
                          {filteredResults.map((r, i) => <ResultRow key={r.id} result={r} index={i} />)}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </main>

      {/* ── Question Modal ── */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 620 }}>
            <div className="modal-header">
              <h3>{editingQ ? 'Edit Question' : 'Add New Question'}</h3>
              <button className="btn btn-outline btn-sm" onClick={closeModal}>✕</button>
            </div>

            <div className="form-group" style={{ marginBottom: 14 }}>
              <label className="form-label">Subject *</label>
              <select
                className={`form-select ${qErrors.subject ? 'error' : ''}`}
                value={qForm.subject}
                onChange={(e) => setQForm((p) => ({ ...p, subject: e.target.value }))}
              >
                <option value="">Select subject…</option>
                {Object.values(SUBJECTS).map((s) => (
                  <option key={s.id} value={s.id}>{s.icon} {s.title}</option>
                ))}
              </select>
              {qErrors.subject && <span className="form-error"><FiAlertCircle size={11} />{qErrors.subject}</span>}
            </div>

            <div className="form-group" style={{ marginBottom: 14 }}>
              <label className="form-label">Question Text *</label>
              <textarea
                className={`form-textarea ${qErrors.text ? 'error' : ''}`}
                placeholder="Enter the question…"
                value={qForm.text}
                onChange={(e) => setQForm((p) => ({ ...p, text: e.target.value }))}
                maxLength={500}
              />
              {qErrors.text && <span className="form-error"><FiAlertCircle size={11} />{qErrors.text}</span>}
            </div>

            <div style={{ marginBottom: 14 }}>
              <label className="form-label" style={{ display: 'block', marginBottom: 8 }}>
                Answer Options * (select the correct one)
              </label>
              {qErrors.options && <span className="form-error" style={{ display: 'flex', marginBottom: 8 }}><FiAlertCircle size={11} />{qErrors.options}</span>}
              {qForm.options.map((opt, i) => (
                <div key={i} className="flex items-center gap-2" style={{ marginBottom: 8 }}>
                  <input
                    type="radio"
                    name="correct-answer"
                    checked={qForm.answer === i}
                    onChange={() => setQForm((p) => ({ ...p, answer: i }))}
                    id={`opt-radio-${i}`}
                    style={{ accentColor: 'var(--accent)', width: 16, height: 16, flexShrink: 0, cursor: 'pointer' }}
                  />
                  <input
                    className="form-input"
                    style={{ flex: 1 }}
                    placeholder={`Option ${['A','B','C','D'][i]}…`}
                    value={opt}
                    onChange={(e) => {
                      const opts = [...qForm.options];
                      opts[i] = e.target.value;
                      setQForm((p) => ({ ...p, options: opts }));
                    }}
                    maxLength={200}
                  />
                </div>
              ))}
              {qErrors.answer && <span className="form-error"><FiAlertCircle size={11} />{qErrors.answer}</span>}
            </div>

            <div className="form-group" style={{ marginBottom: 24 }}>
              <label className="form-label">Explanation (optional)</label>
              <textarea
                className="form-textarea"
                placeholder="Explain why the correct answer is correct…"
                value={qForm.explanation}
                onChange={(e) => setQForm((p) => ({ ...p, explanation: e.target.value }))}
                maxLength={600}
                style={{ minHeight: 70 }}
              />
            </div>

            <div className="flex gap-2">
              <button className="btn btn-outline" style={{ flex: 1 }} onClick={closeModal}>Cancel</button>
              <button className="btn btn-primary" style={{ flex: 1 }} onClick={handleSaveQuestion} disabled={saving}>
                {saving ? 'Saving…' : editingQ ? 'Update Question' : 'Add Question'}
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .chart-section-title {
          font-size: 0.82rem; font-weight: 600; color: var(--text-secondary);
          margin-bottom: 16px; display: flex; align-items: center; gap: 6px;
          text-transform: uppercase; letter-spacing: 0.06em;
        }
        .td-muted { color: var(--text-muted); font-size: 0.85rem; }
        @media (max-width: 900px) {
          .charts-row { grid-template-columns: 1fr !important; }
          .charts-row .card { grid-column: span 1 !important; }
        }
      `}</style>
    </div>
  );
}
