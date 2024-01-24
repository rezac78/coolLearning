import { GetServerSidePropsContext } from "next";
import { Blog } from '../../types/auth';
import { BlogAllData, BlogData, getAllBlogComments } from '@/services/createBlogService';
import PageBlogPart from '@/components/PageBlog/PageBlog';
import useAuth from '@/hooks/useAuth';
interface BlogIdProps {
        role: string | null;
        initialBlogData: Blog[];
        CommentData: any;
        blogsData:Blog[];
}
export default function PageBlog(props: BlogIdProps) {
        const role = useAuth({});
        return (
                <PageBlogPart blogsData={props.blogsData} CommentData={props.CommentData.data} Role={role?.role} initialBlogData={props.initialBlogData} />
        )
}
export const getServerSideProps = async (context: GetServerSidePropsContext) => {
        const blogId = Array.isArray(context.params?.id) ? context.params?.id[0] : context.params?.id;
        const blogData = blogId ? await BlogData(blogId) : null;
        const CommentData = blogId ? await getAllBlogComments(blogId) : null;
        const blogsData = await BlogAllData();
        if (!blogData) {
                throw new Error('Failed to fetch courses data');
        }
        return { props: { initialBlogData: blogData ? blogData.data : null, CommentData, blogsData: blogsData.data } };
};