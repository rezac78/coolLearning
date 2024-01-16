import AdminDash from "@/components/AdminDash/AdminDash";
import { checkAuthentication } from '../../utils/authentication';
import { GetServerSidePropsContext } from "next";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const decoded:any = await checkAuthentication(context);
  if (decoded.role !== 'admin') {
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

export default function AdminDashboard() {
  return <AdminDash />
};