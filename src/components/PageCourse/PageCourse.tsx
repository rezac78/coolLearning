import Header from "../Header";
import useTheme from "@/hooks/useTheme";
import Footer from "../Footer/Footer";
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import HeaderPage from "./HeaderPage/HeaderPage";
import LeftSide from "./LeftSide/LeftSide";
import { LeftSideCourse } from "@/Event/Event";
import RightSide from "./RightSide/RightSide";
import { useEffect, useState } from "react";
import { useShoppingCart } from '../../context/ShoppingCartContext';
import Alerts from "../Shared/Alert/Alert";
interface PageCoursePartProps {
        initialCourseData?: any;
        Role: string | undefined;
        CommentData: any;
}
export default function PageCoursePartProps(props: PageCoursePartProps) {
        const { theme, toggleTheme } = useTheme();
        const [openChapterIndex, setOpenChapterIndex] = useState(null);
        const toggleChapter = (index: any) => {
                setOpenChapterIndex(openChapterIndex === index ? null : index);
        };
        const { addToCart, successMessage, clearSuccessMessage } = useShoppingCart();
        useEffect(() => {
                if (successMessage) {
                        const timer = setTimeout(() => clearSuccessMessage(), 3000); // Message disappears after 3 seconds
                        return () => clearTimeout(timer);
                }
        }, [successMessage, clearSuccessMessage]);
        return (
                <div className={`${theme === 'light' ? 'dark' : 'light'}`}>
                        {successMessage && <Alerts Message={successMessage} type={true} />}
                        <div className="bg-white dark:bg-black flex flex-col min-h-screen">
                                <Header Role={props.Role} toggleTheme={toggleTheme} currentTheme={theme} />
                                <div className="max-w-6xl mx-auto mt-5">
                                        <HeaderPage Prices={props.initialCourseData.coursePrice} NameTeach={props.initialCourseData.instructorName} ImageUrl={props.initialCourseData.instructorPoster} HeadTitle={props.initialCourseData.title} />
                                        <div className="flex flex-col md:flex-row mt-5">
                                                <div className="md:flex-1 w-full md:w-2/6 p-4 rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
                                                        <p className="text-2xl text-dark-green dark:text-light-green font-semibold mb-2">${props.initialCourseData.coursePrice}</p>
                                                        <button onClick={() => addToCart(props.initialCourseData)} className="flex items-center justify-center w-full px-4 py-2 bg-bg-button hover:bg-bg-button-hover text-dark-color-Font rounded transition duration-300">
                                                                <ShoppingCartIcon className="h-5 w-5 mr-2" />
                                                                Add to Cart
                                                        </button>
                                                        <div className="mt-6">
                                                                {LeftSideCourse.map((e, i) => (
                                                                        <LeftSide key={i} Chapters={props.initialCourseData.chapters} initialCourseData={props.initialCourseData} Label={e.Label} color={e.color} icon={e.icon} idPart={e.idPart} />
                                                                ))}
                                                        </div>
                                                </div>
                                                <div className="flex-2 w-full md:w-4/6 overflow-y-auto mt-4 md:mt-0 md:ml-6">
                                                        <RightSide isPurchased={props.initialCourseData.isPurchased} CommentData={props.CommentData} courseId={props.initialCourseData._id} Click={toggleChapter} openChapterIndex={openChapterIndex} Chapters={props.initialCourseData.chapters} LongDescription={props.initialCourseData.longDescription} SrcImage={props.initialCourseData.coursePhoto} />
                                                </div>
                                        </div>
                                </div>
                                <Footer />
                        </div>
                </div>
        )
}