import { CommentFormSchema } from '../../../schema/schema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import Alerts from '../Alert/Alert';
import Button from '../Button/Button';
interface CommentFormProps {
        courseId: string;
        onNewComment: (newComment: any) => void;
        parentCommentId?: string;
        CreateComment: (commentData: any) => Promise<any>
        ReplayComment: any;
}
export default function CommentForm(props: CommentFormProps) {
        const { register, handleSubmit, formState: { errors }, reset } = useForm({
                resolver: yupResolver(CommentFormSchema)
        });
        const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
        const [numberSuccessMessage, setNumberSuccessMessage] = useState<boolean>();
        const [SuccessMessage, setSuccessMessage] = useState<string>();
        const onSubmit = async (data: any) => {
                let response;
                if (props.parentCommentId) {
                        response = await props.ReplayComment({ ...data, courseId: props.courseId, parentCommentId: props.parentCommentId });
                } else {
                        response = await props.CreateComment({ ...data, courseId: props.courseId });
                }
                if (response.success) {
                        props.onNewComment({
                                ...data,
                                courseId: props.courseId,
                                postedAt: new Date().toISOString()
                        });
                }
                setNumberSuccessMessage(response.success);
                setSuccessMessage(response.message);
                setShowSuccessMessage(true);
                reset();
                setTimeout(() => {
                        setShowSuccessMessage(false);
                }, 5000);
        };
        return (
                <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                        {showSuccessMessage && <Alerts Message={SuccessMessage} type={numberSuccessMessage} />}
                        <div className="mb-4">
                                <input
                                        type="text"
                                        className="w-full rounded border p-2"
                                        placeholder="Your name"
                                        id="name"
                                        {...register('name')}
                                />
                        </div>
                        <div className="mb-4">
                                <textarea
                                        className="w-full rounded border p-2"
                                        placeholder="Leave a comment..."
                                        id="comment"
                                        {...register('comment')}
                                />
                        </div>
                        {errors['comment'] && <p className="mt-2 text-sm text-red-600">{errors['comment']?.message}</p>}
                        <Button Title="Submit Comment" Type={'button'} className="mt-2 bg-bg-button hover:bg-bg-button-hover text-dark-color-Font font-bold py-2 px-4 rounded" />
                </form>
        );
};