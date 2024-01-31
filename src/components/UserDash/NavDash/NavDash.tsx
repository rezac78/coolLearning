import React, { useState } from 'react';
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, ArrowLeftEndOnRectangleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { navigationUser } from "../../../Event/Event"
import ImagePart from '@/components/Shared/ImgPart/Image'
import Links from '@/components/Shared/Link/Link';
import Button from '@/components/Shared/Button/Button';
import Logout from '@/components/Logout/Logout';
import Alerts from '@/components/Shared/Alert/Alert';
interface NavDashProps {
        open: boolean;
}
export default function NavDash({ open }: NavDashProps) {
        const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
        const [numberSuccessMessage, setNumberSuccessMessage] = useState<boolean>();
        const [SuccessMessage, setSuccessMessage] = useState<string>();
        return (
                <>
                        {showSuccessMessage && <Alerts Message={SuccessMessage} type={numberSuccessMessage} />}
                        <div className="flex h-16 items-center justify-between">
                                <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                                <Links Href={"/"} type={"icon"}>
                                                        <ImagePart Src="/Logo1.png" className="w-full" width={60} height={80} />
                                                </Links>
                                        </div>
                                        <div className="hidden md:block">
                                                <div className="ml-10 flex items-baseline space-x-4">
                                                        {navigationUser.map((item) => (
                                                                <Links key={item.id} type="icon" Href={item.href} className={
                                                                        "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                                                                } aria-current='page'>
                                                                        {item.name}
                                                                </Links>
                                                        ))}
                                                </div>
                                        </div>
                                </div>
                                <div className="hidden md:block">
                                        <div className="ml-4 flex items-center md:ml-6">
                                                <Logout Message={setShowSuccessMessage} SuccessMessage={setNumberSuccessMessage} Success={setSuccessMessage} />
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
                                        {navigationUser.map((item) => (
                                                <Links
                                                        key={item.name}
                                                        Href={item.href}
                                                        type="icon"
                                                        className={'text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'}
                                                        aria-current={'page'}
                                                >
                                                        {item.name}
                                                </Links>
                                        ))}
                                </div>
                                <div className="border-t border-gray-700 pb-3 pt-4 flex justify-end">
                                        <Logout Message={setShowSuccessMessage} SuccessMessage={setNumberSuccessMessage} Success={setSuccessMessage} />
                                </div>
                        </Disclosure.Panel>
                </>
        )
}