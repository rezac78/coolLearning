import { useState } from "react";
import Comment from "../ShowComment/ShowComment";
import CommentForm from "./CommentForm";
export default function CommentsSection({ initialComments, courseId, onNewComment, ApiComments }: any) {
        const [comments, setComments] = useState(initialComments || []);
        const addComment = async (name: string, parentId: string, comment: string) => {
                const newComment = { name, parentId, comment };
                try {
                        const response = await ApiComments(newComment, courseId)
                        if (response.success) {
                                setComments((prevComments: any) => [response.data, ...prevComments]);
                        } else {
                                throw new Error('Failed to post comment'); // Handle failure
                        }
                        onNewComment(newComment);
                } catch (error) {
                        console.error(error);
                }
        };
        const renderComments = (parentId = null) =>
                comments
                        .filter((comment: { parentId: null; }) => comment.parentId === parentId)
                        .map((comment: any) => (
                                <Comment key={comment._id} comment={comment} onReply={addComment}>
                                        {renderComments(comment._id)}
                                </Comment>
                        ));
        return (
                <div className="comments-section my-5 w-10/12 md:w-full m-auto">
                        <h2 className="text-xl font-semibold">Comments</h2>
                        <CommentForm onSubmit={addComment} />
                        <div>{renderComments()}</div>
                </div>
        );
};