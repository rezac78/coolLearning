import ImagePart from "@/components/Shared/ImgPart/Image";
import { useState } from "react";
import CommentsSection from "@/components/Shared/CommentForm/CommentsSection";
import { BlogComments } from "@/services/createBlogService";
interface RightSideProps {
        SrcImage: string;
        LongDescription: string;
        blogId: string;
        CommentData: any;
}
export default function RightSide(props: RightSideProps) {
        const [comments, setComments] = useState(props.CommentData || []);
        const addComment = (newComment: any) => {
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
                        <CommentsSection ApiComments={BlogComments} courseId={props.blogId} onNewComment={addComment} initialComments={comments} />
                </>
        )
}