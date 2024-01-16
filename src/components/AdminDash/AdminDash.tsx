import { Disclosure} from '@headlessui/react'
import NavDash from './NavDash/NavDash'
import HeaderDash from './HeaderDash/HeaderDash'
import Alerts from '../Shared/Alert/Alert'
import { useState } from 'react';
export default function AdminDash() {
        return (
                <>
                        <div className="min-h-full">
                                <Disclosure as="nav" className="bg-gray-800">
                                        {({ open }) => (
                                                <>
                                                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                                                <NavDash open={open}/>
                                                        </div>

                                                        
                                                </>
                                        )}
                                </Disclosure>
                                <HeaderDash Type="home" HeadTitle="Dashboard" HeadLink="/"/>
                                <main>
                                        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">reza</div>
                                </main>
                        </div>
                </>
        )
}