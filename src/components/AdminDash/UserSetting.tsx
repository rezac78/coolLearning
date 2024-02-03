import { Disclosure } from '@headlessui/react'
import NavDash from './NavDash/NavDash'
import HeaderDash from './HeaderDash/HeaderDash';
import DashSetting from './DashSetting/DashSetting';
import { useState } from 'react';
import Alerts from '../Shared/Alert/Alert';
export default function AdminSetting({ Data }: any) {
        const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
        const [numberSuccessMessage, setNumberSuccessMessage] = useState<boolean>();
        const [SuccessMessage, setSuccessMessage] = useState<string>();
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
                                <HeaderDash Type="home" HeadTitle="Settings" HeadLink="/" />
                                {showSuccessMessage && <Alerts Message={SuccessMessage} type={numberSuccessMessage} />}
                                <main>
                                        <div className="mx-auto max-w-7xl py-6 px-2 sm:px-8 lg:px-8">
                                                <DashSetting initialData={Data?.data} Message={setShowSuccessMessage} SuccessMessage={setNumberSuccessMessage} Success={setSuccessMessage} />
                                        </div>
                                </main>
                        </div>
                </>
        )
}