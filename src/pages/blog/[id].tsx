import { checkAuthentication } from '../../utils/authentication';
import { GetServerSidePropsContext } from "next";
import { Blog } from '../../types/auth';
import { BlogData, getAllBlogComments } from '@/services/createBlogService';
import PageBlogPart from '@/components/PageBlog/PageBlog';
interface BlogIdProps {
        role: string | null;
        initialBlogData: Blog[];
        CommentData: any;
}
export const getServerSideProps = async (context: GetServerSidePropsContext) => {
        const result: any = await checkAuthentication(context);
        const blogId = Array.isArray(context.params?.id) ? context.params?.id[0] : context.params?.id;
        const role = result.props ? result.props.userRole : null;
        try {
                const blogData = blogId ? await BlogData(blogId) : null;
                const CommentData = blogId ? await getAllBlogComments(blogId) : null;
                if (!blogData) {
                        throw new Error('Failed to fetch courses data');
                }
                return { props: { initialBlogData: blogData ? blogData.data : null, role, CommentData } };
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
export default function PageBlog(props: BlogIdProps) {
        console.log(props.CommentData)
        return (
                <PageBlogPart CommentData={props.CommentData.data} Role={props.role} initialBlogData={props.initialBlogData} />
        )
}