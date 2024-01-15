import { Disclosure } from "@headlessui/react";
import HeaderDash from "../HeaderDash/HeaderDash";
import NavDash from "../NavDash/NavDash";
import CourseForm from "./CourseForm";

export default function AddCourse() {
        return (
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
                        <HeaderDash Type="home" HeadTitle="Add-Course" HeadLink="#" />
                        <main>
                                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                                        <CourseForm/>
                                </div>
                        </main>
                </div>
        )
}