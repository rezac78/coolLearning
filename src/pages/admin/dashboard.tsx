import AdminDash from "@/components/AdminDash/AdminDash";
import useAccess from "@/hooks/useAccess";
export default function AdminDashboard() {
  useAccess('admin');
  return <AdminDash />
};