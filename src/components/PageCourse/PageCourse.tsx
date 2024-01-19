import Header from "../Header";
import useTheme from "@/hooks/useTheme";
import Footer from "../Footer/Footer";
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import HeaderPage from "./HeaderPage/HeaderPage";
import LeftSide from "./LeftSide/LeftSide";
import { LeftSideCourse } from "@/Event/Event";
import RightSide from "./RightSide/RightSide";
import { useState } from "react";
interface PageCoursePartProps {
        initialCourseData?: any;
        Role: string | null;
}
export default function PageCoursePartProps(props: PageCoursePartProps) {
        const { theme, toggleTheme } = useTheme();
        const [openChapterIndex, setOpenChapterIndex] = useState(null);
        const toggleChapter = (index: any) => {
                setOpenChapterIndex(openChapterIndex === index ? null : index);
        };
        return (
                <div className={`${theme === 'light' ? 'dark' : 'light'}`}>
                        <div className="bg-white dark:bg-black flex flex-col min-h-screen">
                                <Header Role={props.Role} toggleTheme={toggleTheme} currentTheme={theme} />
                                <div className="max-w-6xl mx-auto mt-5">
                                        <HeaderPage Prices={props.initialCourseData.coursePrice} NameTeach={props.initialCourseData.instructorName} ImageUrl={props.initialCourseData.instructorPoster} HeadTitle={props.initialCourseData.title} />
                                        <div className="flex flex-col md:flex-row mt-5">
                                                <div className="md:flex-1 w-full md:w-2/6 p-4 rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
                                                        <div className="">
                                                                <p className="text-2xl text-green-500 font-semibold mb-2">{props.initialCourseData.coursePrice}</p>
                                                                <button className="flex items-center justify-center w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
                                                                        <ShoppingCartIcon className="h-5 w-5 mr-2" />
                                                                        Add to Cart
                                                                </button>
                                                                <div className="mt-6">
                                                                        {LeftSideCourse.map((e) => (
                                                                                <LeftSide Chapters={props.initialCourseData.chapters} initialCourseData={props.initialCourseData} Label={e.Label} color={e.color} icon={e.icon} idPart={e.idPart} />
                                                                        ))}
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className="flex-2 w-full md:w-4/6 overflow-y-auto mt-4 md:mt-0 md:ml-6">
                                                        <RightSide Click={toggleChapter} openChapterIndex={openChapterIndex} Chapters={props.initialCourseData.chapters} LongDescription={props.initialCourseData.longDescription} SrcImage={props.initialCourseData.coursePhoto} />
                                                </div>
                                        </div>
                                </div>
                                <Footer />
                        </div>
                </div>
        )
}