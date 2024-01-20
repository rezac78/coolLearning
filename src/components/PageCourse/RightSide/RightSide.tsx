import CommentForm from "@/components/Shared/CommentForm/CommentForm";
import ImagePart from "@/components/Shared/ImgPart/Image";
import ShowComment from "@/components/Shared/ShowComment/ShowComment";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

interface RightSideProps {
        SrcImage: string;
        LongDescription: string;
        Chapters: any;
        openChapterIndex: any;
        Click: any;
        courseId: string;
        CommentData: any;
}
export default function RightSide(props: RightSideProps) {
        const [comments, setComments] = useState(props.CommentData || []);
        const addComment = (newComment:any) => {
                setComments([newComment, ...comments]);
        };
        return (
                <>
                        <div className="shadow-lg rounded-lg overflow-hidden">
                                <ImagePart Src={props.SrcImage} width={600} height={600} className="w-full object-cover" />
                        </div>
                        <div className="text-light-color-Font dark:text-dark-color-Font mt-4 p-4 bg-light-bg-box dark:bg-dark-bg-box rounded-lg shadow">
                                <p className="text-justify">
                                        {props.LongDescription}
                                </p>
                        </div>
                        <div className="mt-4 p-4 bg-light-bg-box dark:bg-dark-bg-box rounded-lg shadow">
                                <h2 className="text-xl font-semibold text-gray-700 mb-4">Seasons</h2>
                                {props.Chapters.map((season: any, index: any) => (
                                        <div key={index} className="mb-4">
                                                <div className="flex justify-between items-center cursor-pointer" onClick={() => props.Click(index)}>
                                                        <h3 className="text-lg font-semibold text-blue-600">{season.name}</h3>
                                                        {props.openChapterIndex === index ? (
                                                                <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                                                        ) : (
                                                                <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                                                        )}
                                                </div>
                                                {props.openChapterIndex === index && (
                                                        <div className="mt-2 pl-4">
                                                                <a href={season.videoUrl} className="text-blue-500 hover:text-blue-700">Download Chapter</a>
                                                                <p className="mt-1 text-gray-600">{season.description}</p>
                                                        </div>
                                                )}
                                        </div>
                                ))}
                                <ShowComment CommentData={comments} />
                                <CommentForm courseId={props.courseId} onNewComment={addComment} />
                        </div>
                </>
        )
}