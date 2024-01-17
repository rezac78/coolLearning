"use client"
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import QuestionsPart from "@/components/QuestionsPart/QuestionsPart";
import Recent from "@/components/RecentPosts/Recent";
import Introduction from "@/components/introduction";
import useTheme from "@/hooks/useTheme";
import { checkAuthentication } from '../utils/authentication';
import { GetServerSidePropsContext } from "next";
interface HomeProps {
        role: string | null;
}
export default function Home(props: HomeProps) {
        const { theme, toggleTheme } = useTheme();
        return (
                <div className={`${theme === 'light' ? 'dark' : 'light'}`}>
                        <div className="bg-white dark:bg-black">
                                <Header Role={props.role} toggleTheme={toggleTheme} currentTheme={theme} />
                                <Introduction />
                                <QuestionsPart />
                                <Recent />
                                <Footer />
                        </div>
                </div>
        )
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
        const result: any = await checkAuthentication(context);
        const role = result.props ? result.props.userRole : null;

        return { props: { role } };
};