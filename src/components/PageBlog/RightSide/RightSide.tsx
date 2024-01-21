import CommentForm from "@/components/Shared/CommentForm/CommentForm";
import ImagePart from "@/components/Shared/ImgPart/Image";
import ShowComment from "@/components/Shared/ShowComment/ShowComment";
import { useState } from "react";
import { BlogComments, ReplayComments } from '@/services/createBlogService';
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
        const addReply = (newReply:any) => {
                setComments(comments.map((comment: { _id: string; replies: any; }) => {
                        if (comment._id === newReply.parentCommentId) {
                                const updatedReplies = comment.replies ? [...comment.replies, newReply] : [newReply];
                                return { ...comment, replies: updatedReplies };
                        }
                        return comment;
                }));
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
                                <ShowComment CreateComment={BlogComments} ReplayComment={ReplayComments} courseId={props.blogId} CommentData={comments} onReply={addReply} />
                                <CommentForm CreateComment={BlogComments} ReplayComment={ReplayComments} courseId={props.blogId} onNewComment={addComment} />
                        </div>
                </>
        )
}