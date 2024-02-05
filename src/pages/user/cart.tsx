import useAccess from '@/hooks/useAccess';
import LoadingPage from '@/components/Shared/Loading/Loading';
import { useEffect, useState } from 'react';
import { UserGetData } from '@/services/userDashboard';
import UserCart from '@/components/UserDash/UserCart';
export default function Carts() {
        const { loading } = useAccess('user');
        const [userInfo, setUserInfo] = useState();
        useEffect(() => {
                const fetchData = async () => {
                        const token = localStorage.getItem("accessToken");
                        const data = await UserGetData(token);
                        setUserInfo(data.data.purchasedCourses);
                };
                fetchData();
        }, []);
        if (loading) {
                return <LoadingPage />;
        }
        return <UserCart Data={userInfo} />;
}