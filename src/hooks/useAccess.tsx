import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { jwtDecode } from "jwt-decode";
import { Token } from "@/types/auth";

const useAccess = (roleRequired: string) => {
        const [user, setUser] = useState<Token | null>(null);
        const [loading, setLoading] = useState(true);
        const router = useRouter();
        useEffect(() => {
                const token = localStorage.getItem('accessToken');
                if (!token) {
                        router.push('/login').then(() => setLoading(false));
                        return;
                }
                try {
                        const decodedUser: Token = jwtDecode(token);
                        if (roleRequired && decodedUser.role !== roleRequired) {
                                router.push('/').then(() => setLoading(false));
                        } else {
                                setUser(decodedUser);
                                setLoading(false);
                        }
                } catch (error) {
                        console.error('Token decoding error:', error);
                        localStorage.removeItem('accessToken');
                        router.push('/login').then(() => setLoading(false));
                }
        }, [router, roleRequired]);
        return { user, loading };
};
export default useAccess;
