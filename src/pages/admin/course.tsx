import NavDash from '@/components/AminDash/NavDash/NavDash'
import Links from '@/components/Shared/Link/Link';
import { Disclosure } from '@headlessui/react'
import { PlusIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
export default function Course() {
        const [inProgress, setInProgress] = useState(true);
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
                                <header className="bg-white shadow">
                                        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
                                                <h1 className="text-3xl font-bold tracking-tight text-gray-900">Course</h1>
                                                <Links className="" Href={"/"} type="icon">
                                                        {inProgress && <PlusIcon className="text-white w-6 h-6 bg-green-500 rounded-full" />}
                                                </Links>
                                        </div>
                                </header>
                                <main>
                                        {/* Your main content goes here */}
                                </main>
                        </div>
                </>
        )
}