// ProtectedRoute.tsx
import React, { ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface ProtectedRouteProps {
  children: ReactNode;
  requiredRole: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requiredRole }) => {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const isBrowser = typeof window !== 'undefined';
  useEffect(() => {
    let accessRole = null;
    if (isBrowser) {
      const userData = localStorage.getItem('userData');
      if (userData) {
        accessRole = userData;
      }
    }
    if (accessRole === requiredRole) {
      setIsAuthorized(true);
    } else {
      router.push('/');
    }
  }, [requiredRole, router]);

  if (!isBrowser || !isAuthorized) {
    return null;
  }
  return <>{children}</>;
};
export default ProtectedRoute;
