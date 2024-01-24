import LoadingPage from '@/components/Shared/Loading/Loading';
import useAccess from '@/hooks/useAccess';
export default function UserDashboard() {
  const { user, loading } = useAccess('user');
  if (loading) {
    return <LoadingPage />;
  }
  return <div className="bg-light-bg-Nav dark:bg-dark-bg-Nav p-4">
    <p className="text-light-color-Font dark:text-dark-color-Font text-center text-xs sm:text-sm md:text-base tracking-tight">Cool Learning programming training website - 2020</p>
  </div>
};