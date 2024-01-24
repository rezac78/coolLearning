import { GetServerSidePropsContext } from "next";
import { Blog } from '../../../../types/auth';
import { BlogData } from '@/services/createBlogService';
import EditBlogPart from '@/components/AdminDash/Edite/EditBlog';
import useAccess from "@/hooks/useAccess";
export default function EditBlog({ initialBlogData }: { initialBlogData: Blog[] }) {
        useAccess('admin');
        return (
                <EditBlogPart initialBlogData={initialBlogData} />
        )
}
export const getServerSideProps = async (context: GetServerSidePropsContext) => {
        const blogId = Array.isArray(context.params?.id) ? context.params?.id[0] : context.params?.id;
        const BlogsData = blogId ? await BlogData(blogId) : null;
        return {
                props: { initialBlogData: BlogsData ? BlogsData.data : null },
        };
};