import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { CommentFormSchema } from '../../../schema/schema';
import Button from "../Button/Button";
export default function CommentForm({ parentId = null, onSubmit }:any) {
        const { register, handleSubmit, formState: { errors }, reset } = useForm({
                resolver: yupResolver(CommentFormSchema)
        });
        const submitForm = (data: any) => {
                onSubmit(data.comment, parentId, data.name);
                reset();
        };
        return (
                <form onSubmit={handleSubmit(submitForm)} className="mt-4 space-y-2">
                        <input
                                className="w-full rounded border p-2"
                                placeholder="Your name"
                                type="text"
                                id="name"
                                {...register('name')}
                        />
                        <textarea
                                className="w-full rounded border p-2"
                                placeholder="Write a comment..."
                                id="comment"
                                {...register('comment')}
                        />
                        {errors['comment'] && <p className="mt-2 text-sm text-red-600">{errors['comment']?.message}</p>}
                        <Button Title="Submit Comment" Type={'button'} className="mt-2 bg-bg-button hover:bg-bg-button-hover text-dark-color-Font font-bold py-2 px-4 rounded" />
                </form>
        );
};