import { checkAuthentication } from '../../utils/authentication';
import { GetServerSidePropsContext } from "next";
import { CourseData, getAllCourseComments } from '@/services/createCourseService';
import { Course } from '../../types/auth';
import PageCoursePart from '@/components/PageCourse/PageCourse';
interface CoursesIdProps {
        role: string | null;
        initialCourseData: Course[];
        CommentData: any;
}
export const getServerSideProps = async (context: GetServerSidePropsContext) => {
        const result: any = await checkAuthentication(context);
        const courseId = Array.isArray(context.params?.id) ? context.params?.id[0] : context.params?.id;
        const role = result.props ? result.props.userRole : null;
        try {
                const courseData = courseId ? await CourseData(courseId) : null;
                const CommentData = courseId ? await getAllCourseComments(courseId) : null;
                if (!courseData) {
                        throw new Error('Failed to fetch courses data');
                }
                return { props: { initialCourseData: courseData ? courseData.data : null, role, CommentData } };
        } catch (error) {
                console.error("Error in getServerSideProps:", error);
                const originalUrl = context.resolvedUrl;
                return {
                        redirect: {
                                destination: `/500?redirect=${encodeURIComponent(originalUrl)}`,
                                permanent: false,
                        },
                };
        }
};
export default function PageCourse(props: CoursesIdProps) {
        return (
                <PageCoursePart CommentData={props.CommentData.data} Role={props.role} initialCourseData={props.initialCourseData} />
        )
}