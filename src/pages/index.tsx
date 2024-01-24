"use client"
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import QuestionsPart from "@/components/QuestionsPart/QuestionsPart";
import Recent from "@/components/RecentPosts/Recent";
import Introduction from "@/components/introduction";
import useTheme from "@/hooks/useTheme";
import { CourseAllData } from "@/services/createCourseService";
import { Course, Token } from "@/types/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { jwtDecode } from "jwt-decode"
import useAuth from "@/hooks/useAuth";
interface HomeProps {
        coursesData: Course[];
}
export default function Home(props: HomeProps) {
        const { theme, toggleTheme } = useTheme();
        const role = useAuth({});
        return (
                <div className={`${theme === 'light' ? 'dark' : 'light'}`}>
                        <div className="bg-white dark:bg-black">
                                <Header Role={role?.role} toggleTheme={toggleTheme} currentTheme={theme} />
                                <Introduction />
                                <QuestionsPart />
                                <Recent CourseData={props.coursesData} />
                                <Footer />
                        </div>
                </div>
        )
}
export const getServerSideProps = async () => {
        const coursesData = await CourseAllData();
        if (!coursesData) {
                throw new Error('Failed to fetch courses data');
        }
        return { props: { coursesData: coursesData.data } };
};