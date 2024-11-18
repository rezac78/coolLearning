"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import QuestionsPart from "@/components/QuestionsPart/QuestionsPart";
import Recent from "@/components/RecentPosts/Recent";
import Introduction from "@/components/introduction";
import useTheme from "@/hooks/useTheme";
import {CourseAllData} from "@/services/createCourseService";
import {Course} from "@/types/auth";
import useAuth from "@/hooks/useAuth";
import {GetServerSidePropsContext} from "next";
interface HomeProps {
 coursesData: Course[];
}
export default function Home(props: HomeProps) {
 const {theme, toggleTheme} = useTheme();
 const {user} = useAuth({restricted: false});
 return (
  <div className={`${theme === "light" ? "dark" : "light"}`}>
   <div className="bg-white dark:bg-black">
    <Header Role={user?.role} toggleTheme={toggleTheme} currentTheme={theme} />
    <Introduction />
    <QuestionsPart />
    <Recent CourseData={props.coursesData} />
    <Footer />
   </div>
  </div>
 );
}
export const getServerSideProps = async (context: GetServerSidePropsContext) => {
 try {
  const coursesData = await CourseAllData();
  if (!coursesData) {
   throw new Error("Failed to fetch courses data");
  }
  return {props: {coursesData: coursesData.data}};
 } catch (error) {
  console.error(error);
  return {
   props: {
    coursesData: [],
   },
  };
 }
};
