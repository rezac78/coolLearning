import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import jwt from "jsonwebtoken";
import cookie from "cookie";

export async function checkAuthentication(
  context: GetServerSidePropsContext,
  redirectIfAuthenticated: boolean = false
): Promise<GetServerSidePropsResult<{}>> {
  const { req } = context;
  const cookies = cookie.parse(req.headers.cookie || "");
  const token = cookies.cookieToken;
  if (!token) {
    if (!redirectIfAuthenticated) {
      return { redirect: { destination: "/login", permanent: false } };
    }
    return { props: {} };
  }
  try {
    const decoded: any = jwt.verify(token, '123456789qazxsedrtg?!@*');
    const userRole = decoded.role;
    if (redirectIfAuthenticated) {
      return { redirect: { destination: "/", permanent: false } };
    }
    return { props: { user: decoded, userRole } };
  } catch (err) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
}
