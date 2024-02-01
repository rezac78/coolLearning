import ImagePart from "@/components/Shared/ImgPart/Image";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/router";
import Alerts from "@/components/Shared/Alert/Alert";
import CommentsSection from "@/components/Shared/CommentForm/CommentsSection";
import { CourseComments } from "@/services/createCourseService";
interface RightSideProps {
        SrcImage: string;
        LongDescription: string;
        Chapters: any;
        openChapterIndex: any;
        Click: any;
        courseId: string;
        CommentData: any;
        isPurchased: any;
}
export default function RightSide(props: RightSideProps) {
        const [successMessage, setSuccessMessage] = useState(false);
        const [comments, setComments] = useState(props.CommentData || []);
        const { user } = useAuth({ restricted: false });
        const router = useRouter();
        const addComment = (newComment: any) => {
                setComments([newComment, ...comments]);
        };
        const handleChapterClick = (index: any) => {
                if (!user) {
                        setSuccessMessage(true);
                        const timer = setTimeout(() => {
                                setSuccessMessage(false);
                                router.push('/login');
                        }, 3000);
                        return () => clearTimeout(timer);
                }
                props.Click(index);
        };
        return (
                <>
                        {successMessage && <Alerts Message="Please log in to access the chapters." />}
                        <div className="shadow-lg rounded-lg overflow-hidden">
                                <ImagePart Src={props.SrcImage} width={600} height={600} className="w-full object-cover" />
                        </div>
                        <div className="text-light-color-Font dark:text-dark-color-Font mt-4 p-4 bg-light-bg-box dark:bg-dark-bg-box rounded-lg shadow">
                                <p className="text-justify">
                                        {props.LongDescription}
                                </p>
                        </div>
                        <div className="mt-4 p-4 bg-light-bg-box dark:bg-dark-bg-box rounded-lg shadow">
                                <h2 className="text-xl font-semibold text-light-color-Font dark:text-dark-color-Font mb-4">Seasons</h2>
                                {
                                        props.Chapters.map((season: any, index: number) => (
                                                <div key={index} className="mb-4">
                                                        <div
                                                                className="flex justify-between items-center cursor-pointer"
                                                                onClick={() => handleChapterClick(index)}
                                                        >
                                                                <h3 className="text-lg font-semibold text-dark-blue dark:text-light-blue">{season.name}</h3>
                                                                {props.openChapterIndex === index ? (
                                                                        <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                                                                ) : (
                                                                        <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                                                                )}
                                                        </div>
                                                        {props.openChapterIndex === index && (
                                                                <div className="mt-2 pl-4">
                                                                        {props.isPurchased ? (
                                                                                <a href={season.videoUrl} className="text-blue-500 hover:text-blue-700">Download Chapter</a>
                                                                        ) : (
                                                                                <p className="text-yellow-500">Purchase the course to access this chapter.</p>
                                                                        )}
                                                                        <p className="mt-1 text-gray-600">{season.description}</p>
                                                                </div>
                                                        )}
                                                </div>
                                        ))
                                }
                                <CommentsSection ApiComments={CourseComments} courseId={props.courseId} onNewComment={addComment} initialComments={comments} />
                        </div>
                </>
        )
}