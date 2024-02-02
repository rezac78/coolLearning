import { Chapter } from "@/types/auth";
import Button from "../Button/Button";
import ImagePart from "../ImgPart/Image";
import { useRouter } from "next/router";
import { HandThumbUpIcon, ChatBubbleOvalLeftIcon } from "@heroicons/react/24/solid";
interface CardProps {
        instructorName: string;
        instructorScope?: string;
        CardPhoto: string;
        instructorPoster?: string;
        Type: string;
        title: string;
        description?: string;
        duration?: string;
        chapters?: Chapter[];
        DataCreate?: any;
        user?: number;
        LinkId: string;
        commentsCount?: number;
        LikeNumber?: any;
        type: 'courses' | 'blog';
        handleLike?: any;
}
export default function Card(props: CardProps) {
        const router = useRouter();
        return (
                <div className="group/item w-full border-y-4 border-dark-bg-border dark:border-light-bg-border p-1 max-w-72 sm:max-w-80 transition duration-700 rounded overflow-hidden shadow-lg hover:-translate-y-6">
                        <div className="relative w-full h-40">
                                <ImagePart className="absolute w-full h-full transition duration-700 hover:brightness-[.5]" Src={props.CardPhoto} width={500} height={300} />
                                <div className="group/edit invisible group-hover/item:visible absolute top-5 left-1 flex items-center">
                                        {props.type === 'blog' ? null : <ImagePart className="w-12 h-12 rounded-full mr-2" Src={props.instructorPoster ?? ""} width={500} height={500} />}
                                        <div>
                                                <span className="block text-dark-color-Font px-2 py-1 text-sm font-bold">{props.instructorName}</span>
                                                <span className="block text-dark-color-Font px-2 py-1 text-xs">{props.instructorScope}</span>
                                        </div>
                                </div>
                                {props.type === 'blog' ? <span className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white px-2 py-1 text-sm">{props.DataCreate.slice(0, 10)}</span> : <span className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white px-2 py-1 text-sm">{props.Type}</span>}
                        </div>
                        <div className="px-2 py-4">
                                <div className="font-bold text-sm sm:text-base text-light-color-Font dark:text-dark-color-Font mb-2">{props.title}</div>
                                {props.type === 'blog' ? null : <div className="relative w-full h-14 overflow-auto text-light-color-Font dark:text-dark-color-Font text-xs">
                                        <p>{props.description}</p>
                                </div>}
                                <Button Click={() => router.push(`/${props.type}/${props.LinkId}`)} className="w-24 mt-4 py-2 bg-bg-button hover:bg-bg-button-hover text-dark-color-Font rounded" Title="Continue" Type={""} />
                        </div>
                        <div className="border-t border-gray-200 px-4 py-3">
                                <div className="flex justify-between text-xs text-light-color-Font dark:text-dark-color-Font">
                                        {props.type === 'blog' ?
                                                <>
                                                        <div className="text-dark-blue dark:text-light-blue">
                                                                <button onClick={() => props.handleLike(props.LinkId)}><HandThumbUpIcon width={20} height={20} /><span className="">{props.LikeNumber}</span></button>
                                                        </div>
                                                        <div className="text-dark-blue dark:text-light-blue">
                                                                <ChatBubbleOvalLeftIcon width={20} height={20} /><span className="ml-1">{props.commentsCount}</span>
                                                        </div>
                                                </>
                                                :
                                                <>
                                                        <span>{props.user} People</span>
                                                        <span>{props.duration} Hours</span>
                                                        <span>{props.chapters?.length} Seasons</span>
                                                </>
                                        }
                                </div>
                        </div>
                </div>
        )
}