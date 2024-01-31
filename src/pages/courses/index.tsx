import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import AllCourse from "@/components/AllCourse";
import useTheme from "@/hooks/useTheme";
import { CourseAllData } from "@/services/createCourseService";
import { Course } from "@/types/auth";
import useAuth from "@/hooks/useAuth";
import { GetServerSidePropsContext } from "next";
import { SearchCourse } from "@/services/SearchService";
interface CoursesProps {
        coursesData: Course[];
}
export default function Courses(props: CoursesProps) {
        const { theme, toggleTheme } = useTheme();
        const { user } = useAuth({ restricted: false });
        return (
                <div className={`${theme === 'light' ? 'dark' : 'light'}`}>
                        <div className="bg-white dark:bg-black flex flex-col min-h-screen">
                                <Header Role={user?.role} toggleTheme={toggleTheme} currentTheme={theme} />
                                <AllCourse CourseData={props.coursesData} />
                                <Footer />
                        </div>
                </div>
        )
}
export const getServerSideProps = async (context: GetServerSidePropsContext) => {
        const searchTerm = context.query.term;
        try {
                let coursesData;
                if (searchTerm) {
                        coursesData = await SearchCourse(searchTerm)
                } else {
                        coursesData = await CourseAllData();
                }
                if (!coursesData) {
                        throw new Error('Failed to fetch courses data');
                }
                return { props: { coursesData: coursesData.data } };
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