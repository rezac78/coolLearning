import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import AllCourse from "@/components/AllCourse";
import useTheme from "@/hooks/useTheme";
import { GetServerSidePropsContext } from "next";
import { checkAuthentication } from "@/utils/authentication";
import { CourseAllData } from "@/services/createCourseService";
import { Course } from "@/types/auth";
interface CoursesProps {
        role: string | null;
        coursesData:Course[];
}
export default function Courses(props: CoursesProps) {
        const { theme, toggleTheme } = useTheme();
        return (
                <div className={`${theme === 'light' ? 'dark' : 'light'}`}>
                        <div className="bg-white dark:bg-black flex flex-col min-h-screen">
                                <Header Role={props.role} toggleTheme={toggleTheme} currentTheme={theme} />
                                <AllCourse CourseData={props.coursesData} />
                                <Footer />
                        </div>
                </div>
        )
}
export const getServerSideProps = async (context: GetServerSidePropsContext) => {
        const result: any = await checkAuthentication(context);
        const role = result.props ? result.props.userRole : null;
        const coursesData = await CourseAllData();
        return { props: { role, coursesData: coursesData.data } };
};