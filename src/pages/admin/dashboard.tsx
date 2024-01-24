import AdminDash from "@/components/AdminDash/AdminDash";
import LoadingPage from "@/components/Shared/Loading/Loading";
import useAccess from "@/hooks/useAccess";
export default function AdminDashboard() {
  const { loading } = useAccess('admin');
  if (loading) {
    return <LoadingPage />;
  }
  return <AdminDash />
};