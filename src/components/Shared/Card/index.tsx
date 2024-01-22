import { Chapter } from "@/types/auth";
import Button from "../Button/Button";
import ImagePart from "../ImgPart/Image";
import { useRouter } from "next/router";
import { HeartIcon, ChatBubbleOvalLeftIcon } from "@heroicons/react/24/solid";
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
        user?: string;
        LinkId: string;
        type: 'courses' | 'blog';
}
export default function Card(props: CardProps) {
        const router = useRouter();
        return (
                <div className="group/item border-y-4 border-dark-bg-border dark:border-light-bg-border p-1 max-w-72 sm:max-w-80 transition duration-700 rounded overflow-hidden shadow-lg hover:-translate-y-6">
                        <div className="relative">
                                <ImagePart className="w-full transition duration-700 hover:brightness-[.5]" Src={props.CardPhoto} width={500} height={300} />
                                <div className="group/edit invisible group-hover/item:visible absolute top-5 left-1 flex items-center">
                                        {props.type === 'blog' ? null : <ImagePart className="w-14 h-16 rounded-full mr-2" Src={props.instructorPoster ?? ""} width={500} height={500} />}
                                        <div>
                                                <span className="block text-dark-color-Font px-2 py-1 text-sm font-bold">{props.instructorName}</span>
                                                <span className="block text-dark-color-Font px-2 py-1 text-xs">{props.instructorScope}</span>
                                        </div>
                                </div>
                                {props.type === 'blog' ? <span className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white px-2 py-1 text-sm">{props.DataCreate.slice(0, 10)}</span> : <span className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white px-2 py-1 text-sm">{props.Type}</span>}
                        </div>
                        <div className="px-4 py-4">
                                <div className="font-bold text-sm sm:text-base text-light-color-Font dark:text-dark-color-Font mb-2">{props.title}</div>
                                <p className="text-light-color-Font dark:text-dark-color-Font text-xs">{props.description}</p>
                                <Button Click={() => router.push(`/${props.type}/${props.LinkId}`)} className="w-24 mt-4 py-2 bg-bg-button hover:bg-bg-button-hover text-dark-color-Font rounded" Title="Continue" Type={""} />
                        </div>
                        <div className="border-t border-gray-200 px-4 py-3">
                                <div className="flex justify-between text-xs text-light-color-Font dark:text-dark-color-Font">
                                        {props.type === 'blog' ?
                                                <>
                                                        <span className="text-dark-red dark:text-light-red"><HeartIcon width={20} height={20} /> 25</span>
                                                        <span className="text-dark-blue dark:text-light-blue"><ChatBubbleOvalLeftIcon width={20} height={20} /> 25</span>
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