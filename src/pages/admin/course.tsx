import AdminCourse from '@/components/AdminDash/AdminCourse';
import ProtectedRoute from '@/components/Route/ProtectedRoute';
export default function Course() {
        return (
                <ProtectedRoute requiredRole="admin">
                        <AdminCourse />
                </ProtectedRoute>
        )
}