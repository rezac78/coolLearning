import { Disclosure } from "@headlessui/react";
import HeaderDash from "../HeaderDash/HeaderDash";
import NavDash from "../NavDash/NavDash";
import { useState } from "react";
import Alerts from "@/components/Shared/Alert/Alert";
import { Blog } from '../../../types/auth';
import BlogForm from "./BlogForm";

export default function EditBlogPart({ initialBlogData }: { initialBlogData: Blog[] }) {
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
                        <HeaderDash Type="home" HeadTitle="Edit-Blog" HeadLink="#" />
                        {showSuccessMessage && <Alerts Message={SuccessMessage} type={numberSuccessMessage} />}
                        <main>
                                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                                        <BlogForm initialBlogData={initialBlogData} Message={setShowSuccessMessage} SuccessMessage={setNumberSuccessMessage} Success={setSuccessMessage} />
                                </div>
                        </main>
                </div>
        )
}