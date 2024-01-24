import EditCoursePart from '@/components/AdminDash/Edite/EditCourse';
import { GetServerSidePropsContext } from "next";
import { CourseData } from '@/services/createCourseService';
import { Course } from '../../../../types/auth';
import useAccess from '@/hooks/useAccess';
import LoadingPage from '@/components/Shared/Loading/Loading';
export default function EditCourse({ initialCourseData }: { initialCourseData: Course[] }) {
        const { loading } = useAccess('admin');
        if (loading) {
                return <LoadingPage />;
        }
        return (
                <EditCoursePart initialCourseData={initialCourseData} />
        )
}
export const getServerSideProps = async (context: GetServerSidePropsContext) => {
        const courseId = Array.isArray(context.params?.id) ? context.params?.id[0] : context.params?.id;
        const courseData = courseId ? await CourseData(courseId) : null;
        return {
                props: { initialCourseData: courseData ? courseData.data : null },
        };
};