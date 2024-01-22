import ImagePart from "@/components/Shared/ImgPart/Image";
import Links from "@/components/Shared/Link/Link";
import { Blog } from "@/types/auth";
interface LeftSideProps {
        creatorName: string;
        tags: string;
        Profile: string;
        creatorScope: string;
        blogsData: Blog[];
}
export default function LeftSide(props: LeftSideProps) {
        return (
                <>
                        <div className="text-center">
                                <ImagePart Src={props.Profile} width={500} height={500} className="w-24 h-24 rounded-full mx-auto" />
                                <h3 className="text-lg font-semibold mt-2 text-light-color-Font dark:text-dark-color-Font">{props.creatorName}</h3>
                                <p className="text-dark-gray dark:text-light-gray">{props.creatorScope}</p>
                        </div>
                        <div className="mt-4 text-center">
                                <h4 className="text-md text-light-color-Font dark:text-dark-color-Font font-semibold mb-10">Last Post Title</h4>
                                {props.blogsData.map((e, i) => (
                                        <Links key={i} Href={`/blog/${e._id}`} type={"icon"}>
                                                <div key={i} className="flex justify-end ">
                                                        <div className="mr-10">
                                                                <p className="text-sm font-medium text-light-color-Font dark:text-dark-color-Font">{e.subject}</p>
                                                                <p className="text-sm text-dark-gray dark:text-light-gray">{e.creatorName}</p>
                                                        </div>
                                                        <ImagePart Src={e.cardPhoto} width={500} height={500} className="w-16 h-16" />
                                                </div>
                                        </Links>
                                ))}
                        </div>
                        <div className="mt-4">
                                <p className="text-sm text-dark-gray dark:text-light-gray"><strong>Tags:</strong> {props.tags}</p>
                        </div>
                </>
        )
}