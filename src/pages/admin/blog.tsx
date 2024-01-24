import AdminBlog from '@/components/AdminDash/AdminBlog'
import { BlogAllData } from '@/services/createBlogService';
import { Blog } from '@/types/auth';
import useAccess from '@/hooks/useAccess';
export default function Blog({ BlogData }: { BlogData: Blog[] }) {
        useAccess('admin');
        return (
                <AdminBlog BlogData={BlogData} />
        )
}
export const getServerSideProps = async () => {
        const BlogData = await BlogAllData();
        return {
                props: { BlogData: BlogData.data },
        };
};