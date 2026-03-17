// src/pages/AdminLogin.jsx
// Firebase Auth email/password login for admin
// Input validated before submission

import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, isDemoMode } from '../firebaseConfig';
import { FiLock, FiMail, FiAlertCircle, FiLogIn, FiAward } from 'react-icons/fi';

// Validate inputs before Firebase call (prevent unnecessary requests)
function validateLoginInputs(email, password) {
  const errors = {};
  if (!email.trim()) errors.email = 'Email is required.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) errors.email = 'Enter a valid email address.';
  if (!password) errors.password = 'Password is required.';
  else if (password.length < 6) errors.password = 'Password must be at least 6 characters.';
  return errors;
}

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [firebaseError, setFirebaseError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setFirebaseError('');

    // Client-side validation first
    const validationErrors = validateLoginInputs(email, password);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setLoading(true);

    if (isDemoMode) {
      // Bypass Firebase for demo mode
      if (email.trim() === 'admin@mockexam.com' && password === 'admin123') {
        localStorage.setItem('quicktest_mock_admin', 'true');
        navigate('/admin/dashboard', { replace: true });
        setLoading(false);
        return;
      } else {
        setFirebaseError('Invalid credentials for demo mode.');
        setLoading(false);
        return;
      }
    }

    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
      navigate('/admin/dashboard', { replace: true });
    } catch (err) {
      // Auto-create if it's the default admin account and not found
      if (err.code === 'auth/user-not-found' && email.trim() === 'admin@mockexam.com' && password === 'admin123') {
        try {
          await createUserWithEmailAndPassword(auth, email.trim(), password);
          navigate('/admin/dashboard', { replace: true });
          return;
        } catch (createErr) {
          setFirebaseError('Failed to initialize admin account.');
          return;
        }
      }

      // Translate Firebase error codes to user-friendly messages
      const msgMap = {
        'auth/user-not-found': 'No admin account found with this email.',
        'auth/wrong-password': 'Incorrect password.',
        'auth/invalid-credential': 'Invalid email or password.',
        'auth/too-many-requests': 'Too many failed attempts. Please try again later.',
        'auth/network-request-failed': 'Network error. Check your connection.',
      };
      setFirebaseError(msgMap[err.code] ?? 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [email, password, navigate]);

  return (
    <div className="login-page">
      <div className="login-card animate-slide">
        {/* Brand */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div className="navbar-brand" style={{ justifyContent: 'center', fontSize: '1.4rem', marginBottom: 8, cursor: 'pointer' }} onClick={() => navigate('/')}>
            <FiAward size={20} /> QuickTest
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Admin Dashboard</p>
        </div>

        <div className="card" style={{ padding: '36px' }}>
          <h2 style={{ marginBottom: 6, fontSize: '1.3rem' }}>Sign In</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: 24 }}>
            Enter your admin credentials to continue
          </p>

          {firebaseError && (
            <div className="alert alert-error" style={{ marginBottom: 20 }}>
              <FiAlertCircle size={14} />
              {firebaseError}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group" style={{ marginBottom: 16 }}>
              <label className="form-label" htmlFor="admin-email">
                <FiMail size={12} style={{ marginRight: 4, display: 'inline' }} />
                Email Address
              </label>
              <input
                id="admin-email"
                type="email"
                className={`form-input ${errors.email ? 'error' : ''}`}
                placeholder="admin@yourdomain.com"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: '' })); }}
                autoComplete="email"
                maxLength={120}
              />
              {errors.email && <span className="form-error"><FiAlertCircle size={11} />{errors.email}</span>}
            </div>

            <div className="form-group" style={{ marginBottom: 24 }}>
              <label className="form-label" htmlFor="admin-password">
                <FiLock size={12} style={{ marginRight: 4, display: 'inline' }} />
                Password
              </label>
              <input
                id="admin-password"
                type="password"
                className={`form-input ${errors.password ? 'error' : ''}`}
                placeholder="••••••••"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setErrors((p) => ({ ...p, password: '' })); }}
                autoComplete="current-password"
                maxLength={128}
              />
              {errors.password && <span className="form-error"><FiAlertCircle size={11} />{errors.password}</span>}
            </div>

            <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }} disabled={loading}>
              {loading ? 'Signing in…' : <><FiLogIn size={15} /> Sign In to Dashboard</>}
            </button>
          </form>
        </div>

        {isDemoMode && (
          <div className="card" style={{ padding: '16px', marginTop: 16, background: 'var(--accent-light)', border: '1px solid var(--accent-dim)', textAlign: 'center' }}>
            <p style={{ fontSize: '0.8rem', color: 'var(--accent-dim)', fontWeight: 600 }}>
              🚀 Demo Mode Active (Bypass Enabled)
            </p>
            <p style={{ fontSize: '0.85rem' }}>
              Email: <strong>admin@mockexam.com</strong><br/>
              Password: <strong>admin123</strong>
            </p>
          </div>
        )}

        <p style={{ textAlign: 'center', marginTop: 16, fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          Student area? <a href="/">Go to Exams</a>
        </p>
      </div>
    </div>
  );
}
