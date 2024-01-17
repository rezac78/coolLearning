import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import AllBlog from "@/components/AllBlog";
import useTheme from "@/hooks/useTheme";
import { GetServerSidePropsContext } from "next";
import { checkAuthentication } from "@/utils/authentication";
interface BlogProps {
        role: string | null;
}
export default function Blog(props: BlogProps) {
        const { theme, toggleTheme } = useTheme();
        return (
                <div className={`${theme === 'light' ? 'dark' : 'light'}`}>
                        <div className="bg-white dark:bg-black flex flex-col min-h-screen">
                                <Header Role={props.role} toggleTheme={toggleTheme} currentTheme={theme} />
                                <AllBlog />
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