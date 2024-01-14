import React from 'react';
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, ArrowLeftEndOnRectangleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { navigation } from "../../../Event/Event"
import Link from 'next/link';
import ImagePart from '@/components/Shared/ImgPart/Image'
interface NavDashProps {
        open: boolean;
}
export default function NavDash({ open }: NavDashProps) {
        return (
                <>
                        <div className="flex h-16 items-center justify-between">
                                <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                                <ImagePart Src="/Logo1.png" className="w-full" width={60} height={80} />
                                        </div>
                                        <div className="hidden md:block">
                                                <div className="ml-10 flex items-baseline space-x-4">
                                                        {navigation.map((item) => (
                                                                <Link key={item.id} href={item.href} className={
                                                                        "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                                                                } aria-current='page'>
                                                                        {item.name}
                                                                </Link>
                                                        ))}
                                                </div>
                                        </div>
                                </div>
                                <div className="hidden md:block">
                                        <div className="ml-4 flex items-center md:ml-6">
                                                <button
                                                        type="button"
                                                        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                                >
                                                        <ArrowLeftEndOnRectangleIcon className="h-6 w-6" aria-hidden="true" />
                                                </button>
                                        </div>
                                </div>
                                <div className="-mr-2 flex md:hidden">
                                        <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                <span className="absolute -inset-0.5" />
                                                <span className="sr-only">Open main menu</span>
                                                {open ? (
                                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                                ) : (
                                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                                )}
                                        </Disclosure.Button>
                                </div>
                        </div>
                        <Disclosure.Panel className="md:hidden">
                                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                                        {navigation.map((item) => (
                                                <Link
                                                        key={item.name}
                                                        href={item.href}
                                                        className={'text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'}
                                                        aria-current={'page'}
                                                >
                                                        {item.name}
                                                </Link>
                                        ))}
                                </div>
                                <div className="border-t border-gray-700 pb-3 pt-4">
                                        <div className="flex items-center px-5">
                                                <button
                                                        type="button"
                                                        className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                                >
                                                        <ArrowLeftEndOnRectangleIcon className="h-6 w-6" aria-hidden="true" />
                                                </button>
                                        </div>
                                </div>
                        </Disclosure.Panel>
                </>
        )
}