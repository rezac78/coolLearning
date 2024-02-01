import { useState } from "react";
import CommentForm from "../CommentForm/CommentForm";
import ImagePart from "../ImgPart/Image";
import Button from "../Button/Button";
interface CommentProps {
        comment: any;
        children: any;
        onReply: any;
}
export default function Comment({ comment, children, onReply }: CommentProps) {
        const [showReplyForm, setShowReplyForm] = useState(false);
        const handleReplySubmit = (text: string, parentId: any, username: string) => {
                onReply(text, parentId, username);
                setShowReplyForm(false);
        };
        return (
                <div className="mt-4 flex items-start shadow-sm rounded-lg p-4">
                        <ImagePart Src={"/user.png"} width={400} height={400} className="w-10 h-10 rounded-full mr-4" />
                        <div className="flex-1">
                                <div className="border-b border-gray-200 pb-2 mb-2">
                                        <div className="flex justify-between items-center">
                                                <strong className="font-bold text-light-color-Font dark:text-dark-color-Font">{comment.name}:</strong>
                                                <p className="text-sm text-light-color-Font dark:text-dark-color-Font">
                                                        {new Date(comment.postedAt).toLocaleDateString()}
                                                </p>
                                        </div>
                                        <p className="text-base text-light-color-Font dark:text-dark-color-Font">{comment.comment}</p>
                                        <Button
                                                Click={() => setShowReplyForm(!showReplyForm)}
                                                className="text-dark-blue dark:text-light-blue hover:text-blue-700 text-sm mt-2" Type={"child"}                                        >
                                                Reply
                                        </Button>
                                </div>
                                {showReplyForm && (
                                        <CommentForm
                                                parentId={comment._id}
                                                onSubmit={handleReplySubmit}
                                        />
                                )}
                                <div className="pl-2 mt-1">{children}</div>
                        </div>
                </div>
        );
};