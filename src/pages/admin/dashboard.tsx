import AminDash from "@/components/AminDash/AminDash";
import ProtectedRoute from "@/components/Route/ProtectedRoute";

const AdminDashboard = () => (
  <ProtectedRoute requiredRole="admin">
    <AminDash/>
  </ProtectedRoute>
);

export default AdminDashboard;
