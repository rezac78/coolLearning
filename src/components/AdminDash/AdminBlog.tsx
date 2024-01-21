import { Disclosure } from '@headlessui/react'
import NavDash from './NavDash/NavDash'
import HeaderDash from './HeaderDash/HeaderDash'
import { Blog } from '@/types/auth';
import DashboardBlog from './Dashboard/DashboardBlog';
interface AdminBlogProps {
        BlogData: Blog[];
}
export default function AdminBlog({ BlogData }: AdminBlogProps) {
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
                                <HeaderDash Type="create" HeadTitle="Blog" HeadLink="/admin/add-blog" />
                                <main>
                                        <div className="mx-auto max-w-7xl py-6 px-2 sm:px-8 lg:px-8">
                                                <DashboardBlog initialCoursesData={BlogData} />
                                        </div>
                                </main>
                        </div>
                </>
        )
}