import AddCourse from '@/components/AdminDash/Add/Course';
import useAccess from '@/hooks/useAccess';
export default function CreateCourse() {
        useAccess('admin');
        return (
                <AddCourse />
        )
}