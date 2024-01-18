import { Disclosure } from "@headlessui/react";
import HeaderDash from "../HeaderDash/HeaderDash";
import NavDash from "../NavDash/NavDash";
import CourseForm from "./CourseForm";
import { useState } from "react";
import Alerts from "@/components/Shared/Alert/Alert";
import { Course } from '../../../types/auth';

export default function EditCoursePart({ initialCourseData }: { initialCourseData: Course[] }) {
        const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
        const [numberSuccessMessage, setNumberSuccessMessage] = useState<boolean>();
        const [SuccessMessage, setSuccessMessage] = useState<string>();
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
                        {showSuccessMessage && <Alerts Message={SuccessMessage} type={numberSuccessMessage} />}
                        <main>
                                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                                        <CourseForm initialCourseData={initialCourseData} Message={setShowSuccessMessage} SuccessMessage={setNumberSuccessMessage} Success={setSuccessMessage} />
                                </div>
                        </main>
                </div>
        )
}