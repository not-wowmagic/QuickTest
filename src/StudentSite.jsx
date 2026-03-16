// src/StudentSite.jsx — Landing / Subject Selection Page
// Performance: no inline components (rerender-no-inline-components rule)
// Design: DM Sans + Space Grotesk, glassmorphism, micro-animations
import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiBookOpen, FiClock, FiTarget, FiArrowRight, FiAward, FiX } from 'react-icons/fi';
import { useWebHaptics } from 'web-haptics/react';
import { SUBJECTS } from './data/seedQuestions';
import ThemeToggle from './components/ThemeToggle';

// Static JSX hoisted outside component (rendering-hoist-jsx rule)
// StatsBar removed

// SubjectCard is defined outside StudentSite to avoid inline component rule violation
function SubjectCard({ subject, onStart }) {
  const colorClass = `subject-${subject.id}`;
  return (
    <div
      className={`card subject-card ${colorClass}`}
      onClick={() => onStart(subject.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onStart(subject.id)}
      aria-label={`Start ${subject.label} exam`}
    >
      <span className="subject-icon">{subject.icon}</span>
      <h3 className="subject-title">{subject.title}</h3>
      <p className="subject-desc">{subject.description}</p>
      <div className="subject-cta">
        Start Exam <FiArrowRight />
      </div>
    </div>
  );
}

export default function StudentSite() {
  const navigate = useNavigate();
  const { trigger } = useWebHaptics();

  const [selectedSubject, setSelectedSubject] = useState(null);
  const [timeAttack, setTimeAttack] = useState(false);
  const [showNav, setShowNav] = useState(true);

  // Stable callback — open modal instead of navigating
  const handleStart = useCallback((subjectId) => {
    trigger('nudge');
    const subjectInfo = SUBJECTS[subjectId];
    if (subjectInfo) {
      setSelectedSubject(subjectInfo);
      setTimeAttack(false); // Reset settings on new modal open
      setShowNav(true);
    }
  }, [trigger]);

  const startExamWithItems = useCallback((itemCount) => {
    trigger('success');
    if (selectedSubject) {
      const items = itemCount || 'all';
      navigate(`/exam/${selectedSubject.id}?items=${items}${timeAttack ? '&timeAttack=true' : ''}${!showNav ? '&hideNav=true' : ''}`);
      setSelectedSubject(null);
    }
  }, [navigate, selectedSubject, timeAttack, showNav, trigger]);

  const subjectList = Object.values(SUBJECTS);

  return (
    <div className="student-site">
      {/* Navbar */}
      <nav className="navbar">
        <div className="container navbar-inner">
          <div className="navbar-brand" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            <FiAward />
            QuickTest
            <span className="navbar-badge">BETA</span>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-eyebrow">
            <FiBookOpen size={12} />
            Mock Examination Platform
          </div>
          <h1 className="hero-title animate-slide">
            Test your knowledge
            <br />before the real exam
          </h1>
          <p className="hero-subtitle animate-fade">
            Practice with curated mock questions for Ethics with Peace Education, Understanding the Self,
            The Contemporary World, and Science, Technology & Society.
          </p>
        </div>
      </section>

      {/* Subject Selection */}
      <section className="subjects-section">
        <div className="container">
          <div className="section-header">
            <h2>Choose Your Subject</h2>
            <p className="section-sub">Select a subject to begin your timed mock exam</p>
          </div>
          <div className="subject-grid">
            {subjectList.map((subj) => (
              <SubjectCard key={subj.id} subject={subj} onStart={handleStart} />
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="tips-section">
        <div className="container">
          <div className="tips-grid">
            <div className="tip-card">
              <div className="tip-icon">💡</div>
              <h4>Read Carefully</h4>
              <p>Read each question fully before selecting your answer.</p>
            </div>
            <div className="tip-card">
              <div className="tip-icon">📊</div>
              <h4>Review Results</h4>
              <p>After submitting, review detailed performance analytics.</p>
            </div>
            <div className="tip-card">
              <div className="tip-icon">🔄</div>
              <h4>Practice Often</h4>
              <p>Your progress is saved — retake anytime to improve.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <p>© 2026 <span 
            onClick={() => navigate('/admin/login')} 
            style={{ cursor: 'text', userSelect: 'none' }}
          >QuickTest</span> · Built for academic excellence</p>
        </div>
      </footer>

      {/* Item Selection Modal */}
      {selectedSubject && (
        <div className="modal-overlay animate-fade" onClick={() => setSelectedSubject(null)}>
          <div className="modal animate-slide-up" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 420 }}>
            <div className="modal-header">
              <h3>Exam Settings</h3>
              <button className="btn btn-outline btn-sm" onClick={() => setSelectedSubject(null)}>
                <FiX />
              </button>
            </div>
            
            <div style={{ textAlign: 'center', marginBottom: 24 }}>
              <span className="subject-icon" style={{ fontSize: '2.5rem', marginBottom: 12, display: 'inline-block' }}>
                {selectedSubject.icon}
              </span>
              <h4 style={{ fontSize: '1.2rem', marginBottom: 8 }}>{selectedSubject.title}</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                How many questions would you like to attempt?
              </p>
              
              <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 16, cursor: 'pointer', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                <input 
                  type="checkbox" 
                  checked={timeAttack} 
                  onChange={(e) => {
                    trigger('nudge');
                    setTimeAttack(e.target.checked);
                  }} 
                  style={{ accentColor: 'var(--accent)', width: 16, height: 16 }} 
                />
                <strong>Time Attack Mode</strong> <span style={{ color: 'var(--text-secondary)' }}>(30s per item)</span>
              </label>

              <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 10, cursor: 'pointer', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                <input 
                  type="checkbox" 
                  checked={showNav} 
                  onChange={(e) => {
                    trigger('nudge');
                    setShowNav(e.target.checked);
                  }} 
                  style={{ accentColor: 'var(--accent)', width: 16, height: 16 }} 
                />
                <strong>Show Question Navigator</strong>
              </label>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }}>
              {[5, 20, 35, 50].map((qty) => (
                <button key={qty} className="btn btn-outline" style={{ display: 'block' }} onClick={() => startExamWithItems(qty)}>
                  <strong>{qty}</strong> Items
                </button>
              ))}
            </div>

            <button className="btn btn-outline" style={{ width: '100%' }} onClick={() => {
              trigger('nudge');
              setSelectedSubject(null);
            }}>
              Cancel
            </button>
          </div>
        </div>
      )}

      <style>{`
        .student-site { min-height: 100vh; }
        .stat-text { font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.08em; margin-top: 2px; }
        .subjects-section { padding: 20px 0 60px; }
        .section-header { text-align: center; margin-bottom: 32px; }
        .section-sub { color: var(--text-secondary); margin-top: 8px; }
        .subject-cta {
          display: flex; align-items: center; gap: 8px;
          margin-top: 20px; font-size: 0.9rem; font-weight: 600;
          color: var(--accent); opacity: 0.85; transition: opacity var(--transition), gap var(--transition);
        }
        .subject-card:hover .subject-cta { opacity: 1; gap: 12px; }
        .tips-section { padding: 0 0 80px; }
        .tips-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; }
        .tip-card {
          background: var(--bg-card); border: 1px solid var(--border);
          border-radius: var(--radius-md); padding: 24px 20px; text-align: center;
          transition: all var(--transition);
        }
        .tip-card:hover { border-color: var(--border-accent); background: var(--bg-card-hover); }
        .tip-icon { font-size: 1.8rem; margin-bottom: 10px; }
        .tip-card h4 { font-size: 0.95rem; margin-bottom: 6px; }
        .tip-card p { font-size: 0.82rem; color: var(--text-secondary); line-height: 1.5; }
        .site-footer { border-top: 1px solid var(--border); padding: 24px 0; text-align: center; color: var(--text-muted); font-size: 0.85rem; }
        @media (max-width: 600px) {
        }
      `}</style>
    </div>
  );
}
