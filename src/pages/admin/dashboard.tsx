import AminDash from "@/components/AdminDash/AdminDash";
import ProtectedRoute from "@/components/Route/ProtectedRoute";

const AdminDashboard = () => (
  <ProtectedRoute requiredRole="admin">
    <AminDash />
  </ProtectedRoute>
);

export default AdminDashboard;
