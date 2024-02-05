import useAccess from '@/hooks/useAccess';
import LoadingPage from '@/components/Shared/Loading/Loading';
import { useEffect, useState } from 'react';
import { UserGetData } from '@/services/userDashboard';
import AdminSetting from '@/components/AdminDash/UserSetting';
export default function Settings() {
        const { loading } = useAccess('admin');
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
        return <AdminSetting Data={userInfo} />;
}