// src/pages/LeaderboardPage.jsx
// Public leaderboard — top scores per subject from Firestore
import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, query, orderBy, limit, getDocs, where } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { SUBJECTS } from '../data/seedQuestions';
import { FiAward, FiTrendingUp, FiHome, FiClock, FiUser } from 'react-icons/fi';
import ThemeToggle from '../components/ThemeToggle';
import LoadingSpinner from '../components/LoadingSpinner';

const SUBJECT_LIST = Object.values(SUBJECTS);

export default function LeaderboardPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      setLoading(true);
      try {
        let q;
        if (activeTab === 'all') {
          q = query(collection(db, 'results'), orderBy('percentage', 'desc'), limit(50));
        } else {
          q = query(
            collection(db, 'results'),
            where('subject', '==', activeTab),
            orderBy('percentage', 'desc'),
            limit(20)
          );
        }
        const snap = await getDocs(q);
        const data = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
        setResults(data);
      } catch (err) {
        console.error('[Leaderboard] fetch error:', err);
        setResults([]);
      }
      setLoading(false);
    };
    fetchLeaderboard();
  }, [activeTab]);

  const getSubjectLabel = (subjectId) => {
    return SUBJECTS[subjectId]?.title || subjectId;
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return '—';
    const d = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const getMedal = (rank) => {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return `#${rank}`;
  };

  return (
    <div className="leaderboard-page">
      <nav className="navbar">
        <div className="container navbar-inner">
          <div className="navbar-brand" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            <FiAward /> QuickTest
          </div>
          <div className="flex gap-2 items-center">
            <ThemeToggle />
            <button className="btn btn-primary btn-sm" onClick={() => navigate('/')}>
              <FiHome size={13} /> Home
            </button>
          </div>
        </div>
      </nav>

      <div className="lb-body">
        <div className="lb-hero">
          <FiTrendingUp size={32} color="var(--accent)" />
          <h1>Leaderboard</h1>
          <p style={{ color: 'var(--text-secondary)', marginTop: 4 }}>Top performers across all subjects</p>
        </div>

        {/* Subject Tabs */}
        <div className="lb-tabs">
          <button
            className={`lb-tab ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Subjects
          </button>
          {SUBJECT_LIST.map((s) => (
            <button
              key={s.id}
              className={`lb-tab ${activeTab === s.id ? 'active' : ''}`}
              onClick={() => setActiveTab(s.id)}
            >
              {s.icon} {s.title}
            </button>
          ))}
        </div>

        {/* Results Table */}
        {loading ? (
          <LoadingSpinner message="Loading leaderboard…" />
        ) : results.length === 0 ? (
          <div className="card" style={{ textAlign: 'center', padding: 40, color: 'var(--text-muted)' }}>
            No results yet. Be the first to take a quiz!
          </div>
        ) : (
          <div className="card lb-table-card">
            <table className="lb-table">
              <thead>
                <tr>
                  <th style={{ width: 56 }}>Rank</th>
                  <th>Student</th>
                  {activeTab === 'all' && <th>Subject</th>}
                  <th style={{ width: 72 }}>Score</th>
                  <th style={{ width: 72 }}>%</th>
                  <th style={{ width: 100 }}>Date</th>
                </tr>
              </thead>
              <tbody>
                {results.map((r, i) => (
                  <tr key={r.id} className={i < 3 ? 'top-three' : ''}>
                    <td className="rank-cell">{getMedal(i + 1)}</td>
                    <td>
                      <div className="lb-name">
                        <FiUser size={12} />
                        {r.studentName || 'Anonymous'}
                      </div>
                    </td>
                    {activeTab === 'all' && <td className="lb-subject">{getSubjectLabel(r.subject)}</td>}
                    <td className="lb-score">{r.score}/{r.total}</td>
                    <td>
                      <span className={`lb-pct ${r.percentage >= 80 ? 'high' : r.percentage >= 60 ? 'mid' : 'low'}`}>
                        {r.percentage}%
                      </span>
                    </td>
                    <td className="lb-date">{formatDate(r.submittedAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <style>{`
        .leaderboard-page { min-height: 100vh; background: var(--bg-base); }
        .lb-body { max-width: 900px; margin: 0 auto; padding: 32px 20px 80px; }
        .lb-hero { text-align: center; margin-bottom: 28px; }
        .lb-hero h1 { margin-top: 8px; }
        .lb-tabs {
          display: flex; gap: 8px; overflow-x: auto; padding-bottom: 4px;
          margin-bottom: 24px; scrollbar-width: thin;
        }
        .lb-tab {
          padding: 8px 16px; border-radius: 100px; border: 1px solid var(--border);
          background: var(--bg-card); font-size: 0.82rem; font-weight: 600;
          cursor: pointer; white-space: nowrap; transition: all var(--transition);
          color: var(--text-secondary);
        }
        .lb-tab:hover { border-color: var(--accent); color: var(--accent); }
        .lb-tab.active { background: var(--accent); color: white; border-color: var(--accent); }
        .lb-table-card { overflow-x: auto; padding: 0; }
        .lb-table { width: 100%; border-collapse: collapse; font-size: 0.88rem; }
        .lb-table th {
          text-align: left; padding: 12px 16px; font-size: 0.75rem; text-transform: uppercase;
          letter-spacing: 0.06em; color: var(--text-muted); border-bottom: 1px solid var(--border);
          font-weight: 700;
        }
        .lb-table td { padding: 12px 16px; border-bottom: 1px solid var(--border); }
        .lb-table tr:last-child td { border-bottom: none; }
        .lb-table tr.top-three td { background: var(--accent-light); }
        .lb-table tr:hover td { background: var(--bg-card-hover); }
        .rank-cell { font-weight: 700; font-size: 1rem; text-align: center; }
        .lb-name { display: flex; align-items: center; gap: 6px; font-weight: 500; }
        .lb-subject { font-size: 0.82rem; color: var(--text-secondary); }
        .lb-score { font-weight: 600; }
        .lb-pct {
          font-weight: 700; padding: 2px 8px; border-radius: 6px; font-size: 0.82rem;
        }
        .lb-pct.high { background: hsla(142,71%,45%,0.15); color: var(--success); }
        .lb-pct.mid { background: hsla(45,93%,47%,0.15); color: hsl(45,80%,40%); }
        .lb-pct.low { background: hsla(0,84%,60%,0.15); color: var(--error); }
        .lb-date { font-size: 0.8rem; color: var(--text-muted); }
        @media (max-width: 640px) {
          .lb-body { padding: 20px 12px 60px; }
          .lb-table th, .lb-table td { padding: 10px 10px; font-size: 0.82rem; }
        }
      `}</style>
    </div>
  );
}
