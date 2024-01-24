import AdminCourse from '@/components/AdminDash/AdminCourse';
import { CourseAllData } from '@/services/createCourseService';
import { Course } from '../../types/auth';
import useAccess from '@/hooks/useAccess';
import LoadingPage from '@/components/Shared/Loading/Loading';
import { GetServerSidePropsContext } from 'next';
export default function Course({ coursesData }: { coursesData: Course[] }) {
        const { loading } = useAccess('admin');
        if (loading) {
                return <LoadingPage />;
        }
        return <AdminCourse coursesData={coursesData} />;
}
export const getServerSideProps = async (context:GetServerSidePropsContext) => {
        context.res.setHeader('Content-Security-Policy', 'default-src \'self\'');
        const coursesData = await CourseAllData();
        return {
                props: { coursesData: coursesData.data },
        };
};