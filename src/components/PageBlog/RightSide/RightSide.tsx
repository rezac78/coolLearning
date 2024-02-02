import ImagePart from "@/components/Shared/ImgPart/Image";
import { useState } from "react";
import CommentsSection from "@/components/Shared/CommentForm/CommentsSection";
import { BlogComments } from "@/services/createBlogService";
import LongDescription from "@/components/Shared/LongDescription/LongDescription";
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
                        <LongDescription LongDescription={props.LongDescription} />
                        <CommentsSection ApiComments={BlogComments} courseId={props.blogId} onNewComment={addComment} initialComments={comments} />
                </>
        )
}