import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import jwt from "jsonwebtoken";
import cookie from "cookie";

export async function checkAuthentication(
  context: GetServerSidePropsContext,
  redirectIfAuthenticated: boolean = false
): Promise<GetServerSidePropsResult<{}>> {
  const { req } = context;
  const cookies = cookie.parse(req.headers.cookie || "");
  const token = cookies.token;
  if (!token) {
    if (!redirectIfAuthenticated) {
      return { redirect: { destination: "/login", permanent: false } };
    }
    return { props: {} };
  }
  try {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET ?? "");
    if (redirectIfAuthenticated) {
      return { redirect: { destination: "/", permanent: false } };
    }
    return { props: { user: decoded } };
  } catch (err) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
}
