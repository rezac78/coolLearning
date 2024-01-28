import { Disclosure } from '@headlessui/react'
import NavDash from './NavDash/NavDash'
import HeaderDash from './HeaderDash/HeaderDash'
export default function UserDash({ Data }: any) {
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
                                        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                                                <label htmlFor={Data?.data.email} className="block text-dark-color-Input-label text-sm font-bold mb-2">Email</label>
                                                <input type={'text'} value={Data?.data.email} id={Data?.data.email} className="shadow appearance-none border rounded w-full py-2 px-3 text-dark-gray bg-light-bg-Input dark:bg-dark-bg-Input leading-tight focus:outline-none focus:shadow-outline" />
                                                <div className="mt-5">
                                                        <label htmlFor={Data?.data.username} className="block text-dark-color-Input-label text-sm font-bold mb-2">Username</label>
                                                        <input type={'text'} value={Data?.data.username} id={Data?.data.username} className="shadow appearance-none border rounded w-full py-2 px-3 text-dark-gray bg-light-bg-Input dark:bg-dark-bg-Input leading-tight focus:outline-none focus:shadow-outline" />
                                                </div>
                                        </div>
                                </main>
                        </div>
                </>
        )
}