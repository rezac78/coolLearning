import AdminBlog from '@/components/AdminDash/AdminBlog'
import { BlogAllData } from '@/services/createBlogService';
import { Blog } from '@/types/auth';
import useAccess from '@/hooks/useAccess';
import LoadingPage from '@/components/Shared/Loading/Loading';
import { GetServerSidePropsContext } from 'next';
export default function Blog({ BlogData }: { BlogData: Blog[] }) {
        const { loading } = useAccess('admin');
        if (loading) {
                return <LoadingPage />;
        }
        return (
                <AdminBlog BlogData={BlogData} />
        )
}
export const getServerSideProps = async (context:GetServerSidePropsContext) => {
        const BlogData = await BlogAllData();
        return {
                props: { BlogData: BlogData.data },
        };
};