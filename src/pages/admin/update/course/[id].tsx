import EditCoursePart from '@/components/AdminDash/Edite/EditCourse';
import { GetServerSidePropsContext } from "next";
import { CourseData } from '@/services/createCourseService';
import { Course } from '../../../../types/auth';
import useAccess from '@/hooks/useAccess';
export default function EditCourse({ initialCourseData }: { initialCourseData: Course[] }) {
        useAccess('admin');
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