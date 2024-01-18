import { Disclosure } from '@headlessui/react'
import NavDash from './NavDash/NavDash'
import HeaderDash from './HeaderDash/HeaderDash'
import Dashboard from './Dashboard/Dashboard'
import { Course } from '../../types/auth';
interface AdminCourseProps {
        coursesData: Course[];
}
export default function AdminCourse({ coursesData }: AdminCourseProps) {
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
                                <HeaderDash Type="create" HeadTitle="Course" HeadLink="/admin/add-course" />
                                <main>
                                        <div className="mx-auto max-w-7xl py-6 px-2 sm:px-8 lg:px-8">
                                                <Dashboard initialCoursesData={coursesData} />
                                        </div>
                                </main>
                        </div>
                </>
        )
}