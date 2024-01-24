import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { jwtDecode } from "jwt-decode";
import { Token } from "@/types/auth";

const useAccess = (roleRequired: string) => {
        const [user, setUser] = useState<Token>();
        const router = useRouter();

        useEffect(() => {
                const token = localStorage.getItem('token');
                if (!token) {
                        router.push('/login');
                        return;
                }

                try {
                        const decodedUser: Token = jwtDecode(token);
                        if (roleRequired && decodedUser.role !== roleRequired) {
                                router.push('/');
                                return;
                        }
                        setUser(decodedUser);
                } catch (error) {
                        console.error('Token decoding error:', error);
                        localStorage.removeItem('token');
                        router.push('/login');
                }
        }, [router, roleRequired]);

        return user;
};

export default useAccess;
