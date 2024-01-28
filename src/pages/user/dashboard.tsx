import LoadingPage from '@/components/Shared/Loading/Loading';
import UserDash from '@/components/UserDash/UserDash';
import useAccess from '@/hooks/useAccess';
import { UserGetData } from '@/services/userDashboard';
import { useEffect, useState } from 'react';
export default function UserDashboard() {
  const [userInfo, setUserInfo] = useState();
  const { loading } = useAccess('user');
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      const data = await UserGetData(token);
      setUserInfo(data);
    };
    fetchData();
  }, []);
  if (loading) {
    return <LoadingPage />;
  }
  return <UserDash Data={userInfo} />
};