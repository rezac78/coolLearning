import { checkAuthentication } from '../../../../utils/authentication';
import { GetServerSidePropsContext } from "next";
import { Blog } from '../../../../types/auth';
import { BlogData } from '@/services/createBlogService';
import EditBlogPart from '@/components/AdminDash/Edite/EditBlog';
export const getServerSideProps = async (context: GetServerSidePropsContext) => {
        const result: any = await checkAuthentication(context);
        if ('redirect' in result) {
                return result;
        }
        const { user } = result.props;
        if (user.role !== 'admin') {
                return {
                        redirect: {
                                destination: '/',
                                permanent: false,
                        },
                };
        }
        const blogId = Array.isArray(context.params?.id) ? context.params?.id[0] : context.params?.id;
        const BlogsData = blogId ? await BlogData(blogId) : null;
        return {
                props: { initialBlogData: BlogsData ? BlogsData.data : null },
        };
};
export default function EditBlog({ initialBlogData }: { initialBlogData: Blog[] }) {
        return (
                <EditBlogPart initialBlogData={initialBlogData} />
        )
}