import { jwtDecode } from "jwt-decode";
interface JwtPayload {
  exp?: number;
}
const isTokenExpired = (token: string): boolean => {
  if (!token) return true;
  const decoded: JwtPayload = jwtDecode(token);
  const currentTime = Date.now() / 1000;
  if (typeof decoded.exp === "undefined") {
    return true;
  }

  return decoded.exp < currentTime;
};

export default isTokenExpired;
