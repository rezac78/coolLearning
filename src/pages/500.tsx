import React from 'react';
import ImagePart from '@/components/Shared/ImgPart/Image';
import { useRouter } from 'next/router';
import Link from 'next/link';
export default function Custom500() {
        const router = useRouter();
        const { redirect }:any = router.query;
        return (
                <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black px-4">
                        <div className="text-center max-w-lg mx-auto">
                                <div className="mb-8">
                                        <ImagePart Src="/500.png" width={600} height={400} className="shadow-lg rounded-lg mx-auto" />
                                </div>
                                <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">500 - Server-side error occurred</h1>
                                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                                        We're sorry for the inconvenience. Please try again later or return to the previous page.
                                </p>
                                {redirect && (
                                        <Link href={decodeURIComponent(redirect)}>
                                                <span className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors cursor-pointer">
                                                        Go back to the previous page
                                                </span>
                                        </Link>
                                )}
                        </div>
                </div>
        );
};