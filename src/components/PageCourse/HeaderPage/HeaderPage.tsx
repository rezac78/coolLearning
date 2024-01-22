import ImagePart from "@/components/Shared/ImgPart/Image";
interface HeaderPageProps {
        ImageUrl: string;
        HeadTitle: string;
        NameTeach: string;
        Prices: string;
}
export default function HeaderPage(props: HeaderPageProps) {
        return (
                <>
                        <h2 className="text-3xl text-light-color-Font dark:text-dark-color-Font font-bold text-center mb-6">{props.HeadTitle}</h2>
                        <div className="flex justify-start items-center mt-5">
                                <div className="w-24 h-24 overflow-hidden rounded-full shadow-lg">
                                        <ImagePart Src={props.ImageUrl} width={500} height={500} className={'w-full h-full object-cover'} />
                                </div>
                                <div className="ml-4">
                                        <p className="text-lg font-semibold text-light-color-Font dark:text-dark-color-Font">{props.NameTeach}</p>
                                        <p className="text-dark-green dark:text-light-green text-xl font-bold mt-2">{props.Prices}</p>
                                </div>
                        </div>
                </>
        )
}