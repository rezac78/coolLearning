import AddBlog from '@/components/AdminDash/Add/Blog';
import LoadingPage from '@/components/Shared/Loading/Loading';
import useAccess from '@/hooks/useAccess';
export default function CreateBlog() {
        const { loading } = useAccess('admin');
        if (loading) {
                return <LoadingPage />;
        }
        return (
                <AddBlog />
        )
}