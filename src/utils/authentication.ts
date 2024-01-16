import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import jwt from 'jsonwebtoken';
import cookie from 'cookie';

export async function checkAuthentication(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<{}>> {
  const { req } = context;
  const cookies = cookie.parse(req.headers.cookie || '');
  const token = cookies.token;
  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
  try {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET ?? '');
    
    return decoded;
  } catch (err) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
}