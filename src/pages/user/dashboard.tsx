import { checkAuthentication } from '../../utils/authentication';
import { GetServerSidePropsContext } from "next";
export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const result: any = await checkAuthentication(context);
  if ('redirect' in result) {
    return result;
  }
  const { user } = result.props;
  if (user.role !== 'user') {
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

export default function UserDashboard() {
  return <div className="bg-light-bg-Nav dark:bg-dark-bg-Nav p-4">
    <p className="text-light-color-Font dark:text-dark-color-Font text-center text-xs sm:text-sm md:text-base tracking-tight">Cool Learning programming training website - 2020</p>
  </div>
};