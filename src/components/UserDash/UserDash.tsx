import { Disclosure } from '@headlessui/react'
import NavDash from './NavDash/NavDash'
import HeaderDash from './HeaderDash/HeaderDash';
import Typed from 'typed.js';
import { useEffect } from 'react';
export default function UserDash({ Data }: any) {
        useEffect(() => {
                if (Data && Data.data && Data.data.email && Data.data.username) {
                        new Typed('#typed-welcome-1', {
                                strings: [`👨‍💻 Welcome to Cool Learning, ${Data.data.username} 🚀`],
                                typeSpeed: 50,
                                showCursor: false,
                                onComplete: (self) => {
                                        new Typed('#typed-welcome-2', {
                                                strings: [`📬 Your Registered Email: ${Data.data.email}.`],
                                                typeSpeed: 50,
                                                startDelay: 500,
                                                showCursor: false,
                                        });
                                },
                        });
                }
        }, [Data]);
        return (
                <>
                        <div className="min-h-full">
                                <Disclosure as="nav" className="bg-gray-800">
                                        {({ open }) => (
                                                <>
                                                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                                                <NavDash open={open} />
                                                        </div>


                                                </>
                                        )}
                                </Disclosure>
                                <HeaderDash Type="home" HeadTitle="Dashboard" HeadLink="/" />
                                <main>
                                        <div className="mx-auto max-w-7xl py-6 px-3 sm:px-6 lg:px-8">
                                                <div id="typed-welcome-1" className="text-base sm:text-xl font-bold mb-4"></div>
                                                <div id="typed-welcome-2" className="text-base sm:text-xl font-bold mb-4"></div>
                                        </div>
                                </main>
                        </div>
                </>
        )
}