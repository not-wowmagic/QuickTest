// src/components/PrivateRoute.jsx
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, isDemoMode } from '../firebaseConfig';
import LoadingSpinner from './LoadingSpinner';

export default function PrivateRoute({ children }) {
  const [user, setUser] = useState(undefined); // undefined = loading

  useEffect(() => {
    // onAuthStateChanged returns an unsubscribe function — clean up on unmount
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser ?? null);
    });
    return unsubscribe;
  }, []);

  if (user === undefined) return <LoadingSpinner />;
  
  const isMocked = isDemoMode && localStorage.getItem('quicktest_mock_admin') === 'true';
  
  if (user === null && !isMocked) return <Navigate to="/admin/login" replace />;
  return children;
}
