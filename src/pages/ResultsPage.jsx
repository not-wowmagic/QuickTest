// src/pages/ResultsPage.jsx
// Chart.js: doughnut (score) + bar (per-question breakdown)
// Shows correct/incorrect review with explanations

import { useMemo, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';
import {
  FiCheckCircle, FiXCircle, FiRefreshCw,
  FiHome, FiAward, FiBarChart2,
  FiShare2, FiTrendingUp, FiStar, FiBook
} from 'react-icons/fi';
import ThemeToggle from '../components/ThemeToggle';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

// Hoist static chart options outside component (rendering-hoist-jsx)
const DOUGHNUT_OPTIONS = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '72%',
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: (ctx) => ` ${ctx.label}: ${ctx.raw}`,
      },
    },
  },
};

const BAR_OPTIONS = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: { enabled: true },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: { precision: 0, color: '#9C9088' },
      grid: { color: 'rgba(0,0,0,0.06)' },
    },
    x: {
      ticks: {
        color: '#9C9088',
        maxRotation: 30,
        font: { size: 10 },
      },
      grid: { display: false },
    },
  },
};

function getGrade(percentage) {
  if (percentage >= 90) return 'A';
  if (percentage >= 80) return 'B';
  if (percentage >= 70) return 'C';
  if (percentage >= 60) return 'D';
  return 'F';
}

export default function ResultsPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  // Guard against direct navigation to /results
  if (!state || !state.questions) {
    return (
      <div className="spinner-overlay">
        <p style={{ color: 'var(--text-secondary)' }}>No results found.</p>
        <Link to="/" className="btn btn-primary" style={{ marginTop: 16 }}>
          <FiHome /> Go Home
        </Link>
      </div>
    );
  }

  const { studentName, subject, score, total, percentage, answers, questions, subjectLabel, timeAttack } = state;
  const passed = percentage >= 60;
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    const text = `I scored ${percentage}% on ${subjectLabel || subject}! 🎓 — QuickTest`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {
      // Fallback for older browsers
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // Derive per-question correctness (rerender-derived-state-no-effect)
  const correctnessMap = useMemo(
    () => questions.map((q, i) => answers[i] === q.answer),
    [questions, answers]
  );

  // Chart data derived during render (rerender-derived-state-no-effect)
  const doughnutData = useMemo(() => ({
    labels: ['Correct', 'Incorrect', 'Skipped'],
    datasets: [{
      data: [
        score,
        questions.filter((_, i) => answers[i] !== undefined && !correctnessMap[i]).length,
        questions.filter((_, i) => answers[i] === undefined).length,
      ],
      backgroundColor: ['rgba(74, 222, 128, 0.8)', 'rgba(58, 140, 217, 0.8)', 'rgba(148, 163, 184, 0.2)'],
      borderColor: ['#4ade80', '#3A8CD9', '#475569'],
      borderWidth: 2,
    }],
  }), [score, questions, answers, correctnessMap]);

  const barData = useMemo(() => ({
    labels: questions.map((_, i) => `Q${i + 1}`),
    datasets: [{
      label: 'Result',
      data: questions.map((_, i) => correctnessMap[i] ? 1 : 0),
      backgroundColor: questions.map((_, i) =>
        answers[i] === undefined
          ? 'rgba(148, 163, 184, 0.3)'
          : correctnessMap[i]
          ? 'rgba(74, 222, 128, 0.7)'
          : 'rgba(58, 140, 217, 0.7)'
      ),
      borderColor: 'transparent',
      borderRadius: 6,
    }],
  }), [questions, correctnessMap, answers]);

  return (
    <div className="results-page">
      {/* Nav */}
      <nav className="navbar">
        <div className="container navbar-inner">
          <div className="navbar-brand" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}><FiAward /> QuickTest</div>
          <div className="flex gap-2 items-center">
            <ThemeToggle />
            <button className="btn btn-outline btn-sm icon-btn-mobile" onClick={() => navigate('/leaderboard')}>
              <FiTrendingUp size={13} /> <span className="hide-text-mobile">Leaderboard</span>
             </button>
             <button className="btn btn-outline btn-sm icon-btn-mobile" onClick={handleShare}>
               <FiShare2 size={13} /> <span className="hide-text-mobile">{copied ? 'Copied!' : 'Share'}</span>
             </button>
             <button className="btn btn-outline btn-sm icon-btn-mobile" onClick={() => navigate(`/exam/${subject}?items=${total}&name=${encodeURIComponent(studentName || '')}${timeAttack ? '&timeAttack=true' : ''}`)}>
               <FiRefreshCw size={13} /> <span className="hide-text-mobile">Retake</span>
             </button>
             <button className="btn btn-primary btn-sm icon-btn-mobile" onClick={() => navigate('/')}>
               <FiHome size={13} /> <span className="hide-text-mobile">Home</span>
             </button>
           </div>
        </div>
      </nav>

      <div className="results-body">
        {/* Score hero */}
        <div className="results-hero animate-slide">
          <div className={`score-circle ${passed ? 'pass' : 'fail'}`}>
            <span className="score-num">{percentage}%</span>
            <span className="score-label">Score</span>
          </div>
          <h1 className="results-title">
            {passed ? <><FiStar style={{ color: '#F59E0B', verticalAlign: 'middle', marginTop: '-4px' }} /> Excellent Work!</> : <><FiBook style={{ color: '#3A8CD9', verticalAlign: 'middle', marginTop: '-4px' }} /> Keep Practicing!</>}
          </h1>
          <p className="results-sub">
            {studentName && <><strong style={{ color: 'var(--text-primary)' }}>{studentName}</strong> · </>}
            {subjectLabel} · {score}/{total} correct
          </p>
          <div className="flex gap-2" style={{ justifyContent: 'center', flexWrap: 'wrap', marginTop: 16 }}>
            <span className={`badge ${passed ? 'badge-success' : 'badge-rose'}`}>
              {passed ? <FiCheckCircle size={11} /> : <FiXCircle size={11} />}
              {passed ? 'PASSED' : 'NEEDS REVIEW'}
            </span>
            <span className="badge" style={{ background: 'var(--accent-light)', color: 'var(--accent)' }}>
              Grade: {getGrade(percentage)}
            </span>
            <span className="badge badge-violet">{score} Correct</span>
            <span className="badge badge-cyan">{total - score} Incorrect</span>
          </div>
        </div>

        {/* Charts row */}
        <div className="charts-row">
          <div className="card chart-card">
            <h3 className="chart-title"><FiAward size={15} /> Score Breakdown</h3>
            <div className="chart-container" style={{ height: 220 }}>
              <Doughnut data={doughnutData} options={DOUGHNUT_OPTIONS} />
            </div>
            <div className="chart-legend">
              <span className="legend-item"><span className="dot" style={{ background: '#4ade80' }} />Correct</span>
              <span className="legend-item"><span className="dot" style={{ background: '#3A8CD9' }} />Incorrect</span>
              <span className="legend-item"><span className="dot" style={{ background: '#475569' }} />Skipped</span>
            </div>
          </div>
          <div className="card chart-card">
            <h3 className="chart-title"><FiBarChart2 size={15} /> Per-Question Results</h3>
            <div className="chart-container" style={{ height: 220 }}>
              <Bar data={barData} options={BAR_OPTIONS} />
            </div>
          </div>
        </div>

        {/* Answer Review */}
        <div className="card review-section">
          <h3 style={{ marginBottom: 20 }}>Answer Review</h3>
          <div className="review-list">
            {questions.map((q, i) => {
              const selected = answers[i];
              const correct = q.answer;
              const isCorrect = correctnessMap[i];
              const skipped = selected === undefined;
              return (
                <div
                  key={q.id}
                  className={`review-item ${isCorrect ? 'correct' : skipped ? 'skipped' : 'incorrect'}`}
                >
                  <div className="review-header">
                    <span className="review-num">Q{i + 1}</span>
                    {isCorrect
                      ? <FiCheckCircle size={15} color="var(--success)" />
                      : skipped
                      ? <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Skipped</span>
                      : <FiXCircle size={15} color="var(--error)" />}
                  </div>
                  <p className="review-question">{q.text}</p>
                  <div className="review-options">
                    {q.options.map((opt, j) => (
                      <div
                        key={j}
                        className={`review-opt ${j === correct ? 'correct-opt' : ''} ${j === selected && !isCorrect ? 'wrong-opt' : ''}`}
                      >
                        <span className="opt-letter">{['A','B','C','D'][j]}</span>
                        {opt}
                        {j === correct && <span className="opt-badge correct-badge">Correct</span>}
                        {j === selected && !isCorrect && <span className="opt-badge wrong-badge">Your Answer</span>}
                      </div>
                    ))}
                  </div>
                  {q.explanation && (
                    <div className="review-explanation">
                      <strong>💡 Explanation:</strong> {q.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .results-page { min-height: 100vh; background: var(--bg-base); overflow-x: hidden; width: 100%; box-sizing: border-box; }
        .results-body { max-width: 880px; margin: 0 auto; padding: 40px 20px 80px; width: 100%; box-sizing: border-box; }
        .results-hero { text-align: center; margin-bottom: 36px; }
        .results-title { font-size: clamp(1.4rem, 3vw, 2rem); margin: 12px 0 6px; }
        .results-sub { color: var(--text-secondary); font-size: 0.95rem; }
        .charts-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 28px; }
        .chart-card { min-width: 0; overflow-x: auto; }
        .chart-container { position: relative; width: 100%; min-width: 400px; }
        .chart-title { font-size: 0.9rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 16px; display: flex; align-items: center; gap: 6px; position: sticky; left: 0; }
        .chart-legend { display: flex; gap: 16px; justify-content: center; margin-top: 12px; flex-wrap: wrap; }
        .legend-item { display: flex; align-items: center; gap: 6px; font-size: 0.78rem; color: var(--text-secondary); }
        .dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
        .review-section { }
        .review-list { display: flex; flex-direction: column; gap: 20px; }
        .review-item { border: 1px solid var(--border); border-radius: var(--radius-md); padding: 20px; }
        .review-item.correct { border-color: hsla(142,71%,45%,0.3); }
        .review-item.incorrect { border-color: hsla(0,84%,60%,0.3); }
        .review-item.skipped { border-color: rgba(0,0,0,0.07); opacity: 0.7; }
        .review-header { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; }
        .review-num { font-size: 0.75rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.08em; }
        .review-question { font-weight: 500; margin-bottom: 14px; line-height: 1.6; word-break: break-word; overflow-wrap: anywhere; }
        .review-options { display: flex; flex-direction: column; gap: 7px; }
        .review-opt {
          display: flex; align-items: flex-start; gap: 10px; padding: 10px 14px;
          border-radius: var(--radius-sm); font-size: 0.88rem; border: 1px solid transparent;
          color: var(--text-secondary); word-break: break-word; overflow-wrap: anywhere;
        }
        .review-opt.correct-opt { background: hsla(142,71%,45%,0.08); border-color: hsla(142,71%,45%,0.25); color: var(--text-primary); }
        .review-opt.wrong-opt { background: hsla(0,84%,60%,0.08); border-color: hsla(0,84%,60%,0.25); }
        .opt-letter { width: 22px; height: 22px; border-radius: 50%; background: var(--bg-surface); border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; font-size: 0.72rem; font-weight: 700; flex-shrink: 0; color: var(--text-muted); margin-top: 2px; }
        .opt-badge { margin-left: auto; font-size: 0.7rem; font-weight: 700; padding: 2px 8px; border-radius: 100px; flex-shrink: 0; white-space: nowrap; }
        .correct-badge { background: hsla(142,71%,45%,0.2); color: var(--success); }
        .wrong-badge { background: hsla(0,84%,60%,0.2); color: var(--error); }
        .review-explanation { margin-top: 12px; padding: 12px 14px; background: var(--accent-light); border-left: 3px solid var(--accent); border-radius: 0 var(--radius-sm) var(--radius-sm) 0; font-size: 0.87rem; color: var(--text-secondary); line-height: 1.6; word-break: break-word; overflow-wrap: anywhere; }
        @media (max-width: 850px) {
          .charts-row { grid-template-columns: 1fr; }
          .results-body { padding: 24px 16px 60px; }
          .results-hero { margin-bottom: 24px; }
          .score-circle { transform: scale(0.9); margin-bottom: -10px; }
        }
        @media (max-width: 480px) {
          .results-title { font-size: 1.5rem; }
          .badge { font-size: 0.65rem; padding: 4px 8px; }
        }
      `}</style>
    </div>
  );
}
