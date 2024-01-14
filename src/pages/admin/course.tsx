import NavDash from '@/components/AminDash/NavDash/NavDash'
import { Disclosure} from '@headlessui/react'
export default function Course() {
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
                                <header className="bg-white shadow">
                                        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                                                <h1 className="text-3xl font-bold tracking-tight text-gray-900">Course</h1>
                                        </div>
                                </header>
                                <main>
                                        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">alireza</div>
                                </main>
                        </div>
                </>
        )
}