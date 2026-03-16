// src/App.jsx
// Lazy-loaded routes per Vercel bundle-dynamic-imports rule
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy imports — reduces initial bundle size
const StudentSite = lazy(() => import('./StudentSite'));
const ExamPage = lazy(() => import('./pages/ExamPage'));
const ResultsPage = lazy(() => import('./pages/ResultsPage'));
const AdminLogin = lazy(() => import('./pages/AdminLogin'));
const AdminDashboard = lazy(() => import('./AdminDashboard'));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Student routes */}
          <Route path="/" element={<StudentSite />} />
          <Route path="/exam/:subject" element={<ExamPage />} />
          <Route path="/results" element={<ResultsPage />} />

          {/* Admin routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin/dashboard"
            element={
              <PrivateRoute>
                <AdminDashboard />
              </PrivateRoute>
            }
          />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
