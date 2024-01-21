import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import AllBlog from "@/components/AllBlog";
import useTheme from "@/hooks/useTheme";
import { GetServerSidePropsContext } from "next";
import { checkAuthentication } from "@/utils/authentication";
import { BlogAllData } from "@/services/createBlogService";
import { Blog } from "@/types/auth";
interface BlogProps {
        role: string | null;
        blogsData: Blog[];
}
export default function Blog(props: BlogProps) {
        const { theme, toggleTheme } = useTheme();
        return (
                <div className={`${theme === 'light' ? 'dark' : 'light'}`}>
                        <div className="bg-white dark:bg-black flex flex-col min-h-screen">
                                <Header Role={props.role} toggleTheme={toggleTheme} currentTheme={theme} />
                                <AllBlog BlogsData={props.blogsData}/>
                                <Footer />
                        </div>
                </div>
        )
}
export const getServerSideProps = async (context: GetServerSidePropsContext) => {
        const result: any = await checkAuthentication(context);
        const role = result.props ? result.props.userRole : null;
        try {
                const blogsData = await BlogAllData();
                if (!blogsData) {
                        throw new Error('Failed to fetch courses data');
                }
                return { props: { role, blogsData: blogsData.data } };
        } catch (error) {
                console.error("Error in getServerSideProps:", error);
                const originalUrl = context.resolvedUrl;
                return {
                        redirect: {
                                destination: `/500?redirect=${encodeURIComponent(originalUrl)}`,
                                permanent: false,
                        },
                };
        }
};