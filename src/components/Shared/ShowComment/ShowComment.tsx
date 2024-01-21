import { useState } from "react";
import ImagePart from "../ImgPart/Image";
import CommentForm from "../CommentForm/CommentForm";
interface ShowCommentProps {
        CommentData: any;
        onReply: any;
        courseId: any;
        CreateComment:any;
        ReplayComment:any;
}
export default function ShowComment(props: ShowCommentProps) {
        const [replyTo, setReplyTo] = useState(null);
        const handleReplyClick = (commentId: any) => {
                setReplyTo(replyTo === commentId ? null : commentId);
        };
        const renderComments = (comments:any) => {
                return comments.map((comment:any) => (
                        <div key={comment._id} className="mb-4">
                                <div className="flex items-start">
                                        <ImagePart Src={"/user.png"} width={400} height={400} className="w-10 h-10 rounded-full mr-4" />
                                        <div className="flex-1">
                                                <div className="flex justify-between items-center">
                                                        <h5 className="font-bold text-light-color-Font dark:text-dark-color-Font">{comment.name}</h5>
                                                        <span className="text-sm text-gray-500">{new Date(comment.postedAt).toLocaleDateString()}</span>
                                                </div>
                                                <p className="text-base text-light-color-Font dark:text-dark-color-Font">{comment.comment}</p>
                                                <button onClick={() => handleReplyClick(comment._id)} className="text-blue-500 hover:text-blue-700 text-sm mt-2">
                                                        Reply
                                                </button>
                                                {replyTo === comment._id && (
                                                        <CommentForm CreateComment={props.CreateComment} ReplayComment={props.ReplayComment} parentCommentId={comment._id} courseId={props.courseId} onNewComment={props.onReply} />
                                                )}
                                        </div>
                                </div>
                                {comment.replies && comment.replies.length > 0 && (
                                        <div className="mt-2 bg-blue-400">
                                                {renderComments(comment.replies)}
                                        </div>
                                )}
                        </div>
                ));
        };
        return <div>{renderComments(props.CommentData)}</div>;
};