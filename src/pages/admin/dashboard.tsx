import AdminDash from "@/components/AdminDash/AdminDash";
import { checkAuthentication } from '../../utils/authentication';
import { GetServerSidePropsContext } from "next";

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
    props: { user },
  };
};

export default function AdminDashboard(user: any) {
  console.log("User role:", user.role);
  return <AdminDash />
};