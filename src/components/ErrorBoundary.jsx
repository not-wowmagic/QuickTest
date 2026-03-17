// src/components/ErrorBoundary.jsx
// React Error Boundary — catches render errors and shows a fallback UI
import { Component } from 'react';
import { FiAlertTriangle, FiRefreshCw } from 'react-icons/fi';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error('[ErrorBoundary]', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          minHeight: '100vh', background: 'var(--bg-base)', padding: 24,
        }}>
          <div className="card" style={{ maxWidth: 460, textAlign: 'center', padding: 40 }}>
            <FiAlertTriangle size={40} color="var(--warning)" style={{ marginBottom: 16 }} />
            <h2 style={{ marginBottom: 8 }}>Something went wrong</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 24, fontSize: '0.9rem', lineHeight: 1.6 }}>
              An unexpected error occurred. This has been logged.
              Try reloading the page.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => window.location.reload()}
              style={{ gap: 6 }}
            >
              <FiRefreshCw size={14} /> Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
