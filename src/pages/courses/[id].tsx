import { checkAuthentication } from '../../utils/authentication';
import { GetServerSidePropsContext } from "next";
import { CourseData } from '@/services/createCourseService';
import { Course } from '../../types/auth';
import PageCoursePart from '@/components/PageCourse/PageCourse';

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
        const result: any = await checkAuthentication(context);
        const courseId = Array.isArray(context.params?.id) ? context.params?.id[0] : context.params?.id;
        const courseData = courseId ? await CourseData(courseId) : null;
        const role = result.props ? result.props.userRole : null;
        return {
                props: { initialCourseData: courseData ? courseData.data : null, role },
        };
};
export default function PageCourse({ initialCourseData }: { initialCourseData: Course[] }, role: string | null) {
        return (
                <PageCoursePart Role={role} initialCourseData={initialCourseData} />
        )
}