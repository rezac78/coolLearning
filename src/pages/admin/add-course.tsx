import AddCourse from '@/components/AdminDash/Add/Course';
import ProtectedRoute from '@/components/Route/ProtectedRoute';
export default function CreateCourse() {
        return (
                <ProtectedRoute requiredRole="admin">
                        <AddCourse />
                </ProtectedRoute>
        )
}