import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import AllBlog from "@/components/AllBlog";
import useTheme from "@/hooks/useTheme";
import { BlogAllData } from "@/services/createBlogService";
import { Blog } from "@/types/auth";
import useAuth from "@/hooks/useAuth";
import { GetServerSidePropsContext } from "next";
import xssFilters from 'xss-filters';
interface BlogProps {
        blogsData: Blog[];
}
export default function Blog(props: BlogProps) {
        const { theme, toggleTheme } = useTheme();
        const { user } = useAuth({ restricted: false });
        return (
                <div className={`${theme === 'light' ? 'dark' : 'light'}`}>
                        <div className="bg-white dark:bg-black flex flex-col min-h-screen">
                                <Header Role={user?.role} toggleTheme={toggleTheme} currentTheme={theme} />
                                <AllBlog BlogsData={props.blogsData} />
                                <Footer />
                        </div>
                </div>
        )
}
export const getServerSideProps = async (context: GetServerSidePropsContext) => {
        try {
                const blogsData = await BlogAllData();
                if (!blogsData) {
                        throw new Error('Failed to fetch courses data');
                }
                return { props: { blogsData: blogsData.data } };
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