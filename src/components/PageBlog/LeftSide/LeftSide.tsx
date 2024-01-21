import ImagePart from "@/components/Shared/ImgPart/Image";
interface LeftSideProps {
        creatorName: string;
        tags: string;
        Profile:string;
        creatorScope:string;
}
export default function LeftSide(props: LeftSideProps) {
        return (
                <>
                        <div className="text-center">
                                <ImagePart Src={props.Profile} width={500} height={500} className="w-24 h-24 rounded-full mx-auto" />
                                <h3 className="text-lg font-semibold mt-2 text-light-color-Font dark:text-dark-color-Font">{props.creatorName}</h3>
                                <p className="text-gray-600">{props.creatorScope}</p>
                        </div>
                        <div className="mt-4 text-center">
                                <h4 className="text-md text-light-color-Font dark:text-dark-color-Font font-semibold mb-10">Last Post Title</h4>
                                <div className="flex justify-end ">
                                        <div className="mr-10">
                                                <p className="text-sm font-medium text-light-color-Font dark:text-dark-color-Font">Post's Title</p>
                                                <p className="text-sm text-gray-600">Author's Name</p>
                                        </div>
                                        <img src="/success.png" alt="Post Picture" className="w-16 h-16" />
                                </div>
                        </div>
                        <div className="mt-4">
                                <p className="text-sm text-gray-600"><strong>Tags:</strong> {props.tags}</p>
                        </div>
                </>
        )
}