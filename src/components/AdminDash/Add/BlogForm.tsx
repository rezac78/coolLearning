import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { blogSchema } from '../../../schema/schema';
import { InputFormBlog } from "@/Event/Event";
import Inputs from '@/components/Shared/Input/Input';
import Button from '@/components/Shared/Button/Button';
import { BlogReq } from '@/services/createBlogService';
import { useRouter } from 'next/router';
interface BlogFormProps {
        Message: (value: boolean) => void;
        SuccessMessage: (value: boolean) => void;
        Success: (value: string) => void;
}
export default function BlogForm(props: BlogFormProps) {
        const { register, handleSubmit, formState: { errors }, reset } = useForm({
                resolver: yupResolver(blogSchema)
        });
        const token = localStorage.getItem("accessToken");
        const router = useRouter();
        const onSubmit = async (data: any) => {
                try {
                        const response = await BlogReq(data, token);
                        props.SuccessMessage(response.success);
                        props.Success(response.message);
                        props.Message(true);
                        setTimeout(() => {
                                props.Message(false);
                        }, 5000);
                        router.push("/admin/blog");
                        reset();
                } catch (error) {
                        console.error('Registration failed:', error);
                }
        };
        return (
                <form onSubmit={handleSubmit(onSubmit)} className="p-4">
                        <div className="flex-1 p-4 shadow rounded-lg">
                                {InputFormBlog.map((e) => (
                                        <Inputs Type="Form" key={e.id} IdName={e.IdName} LabelName={e.LabelName} type={e.type} Register={register} Errors={errors} />
                                ))}
                        </div>
                        <div className="text-right">
                                <Button className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" Type={'child'}>
                                        Submit Course
                                </Button>
                        </div>
                </form>
        );
};
