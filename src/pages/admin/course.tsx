import AdminCourse from '@/components/AdminDash/AdminCourse';
import { CourseAllData } from '@/services/createCourseService';
import { Course } from '../../types/auth';
import useAccess from '@/hooks/useAccess';
export default function Course({ coursesData }: { coursesData: Course[] }) {
        useAccess('admin');
        return <AdminCourse coursesData={coursesData} />;
}
export const getServerSideProps = async () => {
        const coursesData = await CourseAllData();
        return {
                props: { coursesData: coursesData.data },
        };
};