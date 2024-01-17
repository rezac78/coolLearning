import AdminCourse from '@/components/AdminDash/AdminCourse';
import { checkAuthentication } from '../../utils/authentication';
import { GetServerSidePropsContext } from "next";
import { CourseAllData } from '@/services/createCourseService';
import { Course } from '../../types/auth';
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
        const coursesData = await CourseAllData();
        return {
                props: { coursesData },
        };
};

export default function Course({ coursesData }: { coursesData: Course[] }) {
        return <AdminCourse coursesData={coursesData.data} />;
}