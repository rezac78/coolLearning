import { GetServerSidePropsContext } from "next";
import { CourseData, getAllCourseComments } from '@/services/createCourseService';
import { Course } from '../../types/auth';
import PageCoursePart from '@/components/PageCourse/PageCourse';
import useAuth from '@/hooks/useAuth';
import { useEffect, useState } from "react";
import LoadingPage from "@/components/Shared/Loading/Loading";
interface CoursesIdProps {
        initialCourseData: Course[];
        CommentData: any;
        courseId: any;
}
export default function PageCourse(props: CoursesIdProps) {
        const { user } = useAuth({ restricted: false });
        const [courseData, setCourseData] = useState(null);
        const [loading, setLoading] = useState(true);
        useEffect(() => {
                const fetchCourseData = async () => {
                        setLoading(true);
                        try {
                                const token = localStorage.getItem('accessToken');
                                const response = await CourseData(props.courseId, token);
                                setCourseData(response.data);
                        } catch (err) {
                                console.log(err)
                        }
                        setLoading(false);
                };

                fetchCourseData();
        }, [props.courseId]);
        if (loading) {
                return <LoadingPage />;
        }
        return (
                <PageCoursePart CommentData={props.CommentData.data} Role={user?.role} initialCourseData={courseData} />
        )
}
export const getServerSideProps = async (context: GetServerSidePropsContext) => {
        try {
                const courseId = Array.isArray(context.params?.id) ? context.params?.id[0] : context.params?.id;
                const CommentData = courseId ? await getAllCourseComments(courseId) : null;
                return { props: { courseId: courseId, CommentData } };
        } catch (error) {
                const originalUrl = context.resolvedUrl;
                return {
                        redirect: {
                                destination: `/500?redirect=${encodeURIComponent(originalUrl)}`,
                                permanent: false,
                        },
                };
        }
};