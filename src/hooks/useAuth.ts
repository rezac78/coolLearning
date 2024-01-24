import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { jwtDecode } from "jwt-decode";
import { Token } from "@/types/auth";

const useAuth = ({ restricted = false, redirectToHome = false }) => {
  const [user, setUser] = useState<Token>();
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedUser: Token = jwtDecode(token);
        setUser(decodedUser);
        if (redirectToHome) {
          router.push("/").then(() => setIsLoading(false));
        } else {
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Token decoding error:", error);
        localStorage.removeItem("token");
        router.push("/login").then(() => setIsLoading(false));
      }
    } else {
      if (restricted) {
        router.push("/login").then(() => setIsLoading(false));
      } else {
        setIsLoading(false);
      }
    }
  }, [router, restricted, redirectToHome]);
  return { user, isLoading };
};
export default useAuth;
