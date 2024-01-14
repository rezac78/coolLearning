import ProtectedRoute from "@/components/Route/ProtectedRoute";

const UserDashboard = () => (
  <ProtectedRoute requiredRole="user">
    UserDashboard
  </ProtectedRoute>
);

export default UserDashboard;
