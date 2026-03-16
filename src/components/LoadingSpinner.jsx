// src/components/LoadingSpinner.jsx
export default function LoadingSpinner({ message = 'Loading…' }) {
  return (
    <div className="spinner-overlay" role="status" aria-live="polite">
      <div className="spinner-ring">
        <div /><div /><div /><div />
      </div>
      <p className="spinner-label">{message}</p>
    </div>
  );
}
