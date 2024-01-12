import Button from "../Button/Button";
import ImagePart from "../ImgPart/Image";
interface CardProps {
        key: number;
        ImagePoster: string;
        TitlePoster: string;
        Title: string;
        type: string;
}
export default function Card(props: CardProps) {
        return (
                <div key={props.key} className="max-w-72 sm:max-w-80 group/item transition duration-700 rounded overflow-hidden shadow-lg hover:-translate-y-6">
                        <div className="relative">
                                <ImagePart className="w-full transition duration-700 hover:brightness-[.5]" Src={props.ImagePoster} width={500} height={300} />
                                <span className="absolute top-5 left-5 text-light-color-Font px-2 py-1 text-sm group/edit invisible group-hover/item:visible">{props.TitlePoster}</span>
                        </div>
                        <div className="px-1 py-4">
                                <div className="font-bold text-sm sm:text-base text-light-color-Font dark:text-dark-color-Font mb-2">{props.Title}</div>
                                <Button className="px-1 text-right pt-2 pb-2 text-light-color-Font dark:text-dark-color-Font" Title="More" />
                        </div>
                </div>

        )
}