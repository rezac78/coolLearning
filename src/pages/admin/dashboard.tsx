import ProtectedRoute from "@/components/Route/ProtectedRoute";

const AdminDashboard = () => (
  <ProtectedRoute requiredRole="admin">
    AdminDashboard
  </ProtectedRoute>
);

export default AdminDashboard;
