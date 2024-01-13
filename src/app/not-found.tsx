import React from 'react';
import ImagePart from '@/components/Shared/ImgPart/Image';
import Links from '@/components/Shared/Link/Link';
export default function Custom404() {
        return (
                <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black">
                        <div className="text-center">
                                <ImagePart Src="/notFound.png" width={600} height={400} className="" />
                                <h1 className="text-6xl font-bold">404</h1>
                                <p className="text-xl mb-4">Oops! The page you're looking for does not exist.</p>
                                <a className="text-blue-600 hover:underline">
                                        <Links className="" Href="/" Title="Go back home" />
                                </a>
                        </div>
                </div>
        );
};