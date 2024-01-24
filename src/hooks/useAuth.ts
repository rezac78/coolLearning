import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { jwtDecode } from "jwt-decode";
import { Token } from "@/types/auth";

const useAuth = ({ redirectToLogin = false, redirectToHome = false }) => {
  const [role, setRole] = useState<Token>();
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token && redirectToLogin) {
      router.push("/login");
    } else if (token && redirectToHome) {
      router.push("/");
    } else if (token) {
      try {
        const userRole: Token = jwtDecode(token);
        setRole(userRole);
      } catch (error) {
        console.error("Token decoding error:", error);
        router.push("/500");
      }
    }
  }, [router, redirectToLogin, redirectToHome]);

  return role;
};

export default useAuth;
