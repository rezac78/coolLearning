import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Custom404 = () => {
        return (
                <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black">
                        <div className="text-center">
                                <Image
                                        src="/notFound.png"
                                        alt="404 Page Not Found"
                                        width={600} // Adjust the width as needed
                                        height={400} // Adjust the height as needed
                                />
                                <h1 className="text-6xl font-bold">404</h1>
                                <p className="text-xl mb-4">Oops! The page you're looking for does not exist.</p>
                                <a className="text-blue-600 hover:underline">
                                        <Link href="/">
                                                Go back home
                                        </Link>
                                </a>
                        </div>
                </div>
        );
};

export default Custom404;
