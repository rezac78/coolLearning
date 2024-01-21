import { checkAuthentication } from '../../utils/authentication';
import { GetServerSidePropsContext } from "next";
import AddBlog from '@/components/AdminDash/Add/Blog';
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
        return {
                props: {},
        };
};
export default function CreateBlog() {
        return (
                <AddBlog />
        )
}