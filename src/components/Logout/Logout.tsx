import React from 'react';
import { useRouter } from 'next/router';
import Button from '../Shared/Button/Button';
import { ArrowLeftEndOnRectangleIcon } from '@heroicons/react/24/solid';
import { LogoutReq } from '../../services/authService';
interface LogoutPartProps {
        Message: (value: boolean) => void;
        SuccessMessage: (value: boolean) => void;
        Success: (value: string) => void;
}
export default function Logout(props: LogoutPartProps) {
        const router = useRouter();
        const logout = async () => {
                try {
                        localStorage.removeItem("accessToken");
                        localStorage.removeItem("refreshToken");
                        const response = await LogoutReq();
                        props.SuccessMessage(response.success);
                        props.Success(response.message);
                        props.Message(true);
                        setTimeout(() => {
                                props.Message(false);
                                router.push('/login');
                        }, 3000);
                } catch (error) {
                        console.error('Logout failed:', error);
                }
        };
        return (
                <Button
                        Type="child"
                        Click={logout}
                        IdName="logout"
                        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                        <ArrowLeftEndOnRectangleIcon className="h-6 w-6" aria-hidden="true" />
                </Button>
        );
};
