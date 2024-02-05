import useAccess from '@/hooks/useAccess';
import LoadingPage from '@/components/Shared/Loading/Loading';
import UserSetting from '@/components/UserDash/UserSetting';
import { useEffect, useState } from 'react';
import { UserGetData } from '@/services/userDashboard';
export default function Settings() {
        const { loading } = useAccess('user');
        const [userInfo, setUserInfo] = useState();
        useEffect(() => {
                const fetchData = async () => {
                        const token = localStorage.getItem("accessToken");
                        const data = await UserGetData(token);
                        setUserInfo(data);
                };
                fetchData();
        }, []);
        if (loading) {
                return <LoadingPage />;
        }
        return <UserSetting Data={userInfo} />;
}
