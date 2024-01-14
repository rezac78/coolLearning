import AdminBlog from '@/components/AdminDash/AdminBlog'
import ProtectedRoute from '@/components/Route/ProtectedRoute'
export default function Blog() {
        return (
                <ProtectedRoute requiredRole="admin">
                        <AdminBlog />
                </ProtectedRoute>
        )
}