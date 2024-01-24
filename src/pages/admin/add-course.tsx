import AddCourse from '@/components/AdminDash/Add/Course';
import LoadingPage from '@/components/Shared/Loading/Loading';
import useAccess from '@/hooks/useAccess';
export default function CreateCourse() {
        const { loading } = useAccess('admin');
        if (loading) {
                return <LoadingPage />;
        }
        return (
                <AddCourse />
        )
}