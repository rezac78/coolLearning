import React, { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';

interface PublicRouteProps {
  children: ReactNode;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const router = useRouter();
  const isBrowser = typeof window !== 'undefined';

  useEffect(() => {
    const token = isBrowser ? localStorage.getItem('token') : null;

    if (token) {
      router.push('/');
    }
  }, [router]);

  return <>{children}</>;
};

export default PublicRoute;
