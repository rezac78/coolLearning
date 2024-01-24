import AddBlog from '@/components/AdminDash/Add/Blog';
import useAccess from '@/hooks/useAccess';
export default function CreateBlog() {
        useAccess('admin');
        return (
                <AddBlog />
        )
}