import EditCoursePart from '@/components/AdminDash/Edite/EditCourse';
import { checkAuthentication } from '../../../../utils/authentication';
import { GetServerSidePropsContext } from "next";
import { CourseData } from '@/services/createCourseService';
import { Course } from '../../../../types/auth';

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
        const result: any = await checkAuthentication(context);
        if ('redirect' in result) {
                return result;
        }
        const { user } = result.props;
        if (user.role !== 'admin') {
                return {
                        redirect: {
                                destination: '/',
                                permanent: false,
                        },
                };
        }
        const courseId = Array.isArray(context.params?.id) ? context.params?.id[0] : context.params?.id;
        const courseData = courseId ? await CourseData(courseId) : null;
        return {
                props: { initialCourseData: courseData ? courseData.data : null },
        };
};
export default function EditCourse({ initialCourseData }: { initialCourseData: Course[] }) {
        return (
                <EditCoursePart initialCourseData={initialCourseData} />
        )
}