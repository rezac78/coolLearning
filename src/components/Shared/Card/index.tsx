import { Chapter } from "@/types/auth";
import Button from "../Button/Button";
import ImagePart from "../ImgPart/Image";
interface CardProps {
        keyPart: number;
        instructorName: string;
        instructorScope: string;
        coursePhoto: string;
        instructorPoster: string;
        courseType: string;
        title: string;
        description: string;
        duration: string;
        chapters: Chapter[];
        userBy: string;
        type: string;
}
export default function Card(props: CardProps) {
        return (
                <div key={props.keyPart} className="group/item border-y-4 border-dark-bg-border dark:border-light-bg-border p-1 max-w-72 sm:max-w-80 transition duration-700 rounded overflow-hidden shadow-lg hover:-translate-y-6">
                        <div className="relative">
                                <ImagePart className="w-full transition duration-700 hover:brightness-[.5]" Src={props.coursePhoto} width={500} height={300} />
                                <div className="group/edit invisible group-hover/item:visible absolute top-5 left-1 flex items-center">
                                        <ImagePart className="w-10 h-10 rounded-full mr-2" Src={props.instructorPoster} width={80} height={80} />
                                        <div>
                                                <span className="block text-dark-color-Font px-2 py-1 text-sm font-bold">{props.instructorName}</span>
                                                <span className="block text-dark-color-Font px-2 py-1 text-xs">{props.instructorScope}</span>
                                        </div>
                                </div>
                                <span className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white px-2 py-1 text-sm">{props.courseType}</span>
                        </div>
                        <div className="px-4 py-4">
                                <div className="font-bold text-sm sm:text-base text-light-color-Font dark:text-dark-color-Font mb-2">{props.title}</div>
                                <p className="text-light-color-Font dark:text-dark-color-Font text-xs">{props.description}</p>
                                <Button className="w-24 mt-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700" Title="Continue" Type={""} />
                        </div>
                        <div className="border-t border-gray-200 px-4 py-3">
                                <div className="flex justify-between text-xs text-light-color-Font dark:text-dark-color-Font">
                                        <span>{props.userBy} People</span>
                                        <span>{props.duration} Hours</span>
                                        <span>{props.chapters.length} Seasons</span>
                                </div>
                        </div>
                </div>
        )
}