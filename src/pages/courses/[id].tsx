import { GetServerSidePropsContext } from "next";
import { CourseData, getAllCourseComments } from '@/services/createCourseService';
import { Course } from '../../types/auth';
import PageCoursePart from '@/components/PageCourse/PageCourse';
import useAuth from '@/hooks/useAuth';
interface CoursesIdProps {
        initialCourseData: Course[];
        CommentData: any;
}
export default function PageCourse(props: CoursesIdProps) {
        const role = useAuth({});
        return (
                <PageCoursePart CommentData={props.CommentData.data} Role={role?.role} initialCourseData={props.initialCourseData} />
        )
}
export const getServerSideProps = async (context: GetServerSidePropsContext) => {
        const courseId = Array.isArray(context.params?.id) ? context.params?.id[0] : context.params?.id;
        const courseData = courseId ? await CourseData(courseId) : null;
        const CommentData = courseId ? await getAllCourseComments(courseId) : null;
        if (!courseData) {
                throw new Error('Failed to fetch courses data');
        }
        return { props: { initialCourseData: courseData ? courseData.data : null, CommentData } };
};