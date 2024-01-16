import React from 'react';
import { useRouter } from 'next/router';
import Button from '../Shared/Button/Button';
import { ArrowLeftEndOnRectangleIcon } from '@heroicons/react/24/solid';
import Cookies from 'js-cookie';
export default function Logout() {
        const router = useRouter();
        const logout = () => {
                Cookies.remove('token');
                router.push('/login');
        };
        return (
                <Button
                        Type="child"
                        Click={logout}
                        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                        <ArrowLeftEndOnRectangleIcon className="h-6 w-6" aria-hidden="true" />
                </Button>
        );
};
