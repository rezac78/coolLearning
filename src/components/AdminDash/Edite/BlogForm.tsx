import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { blogSchema } from '../../../schema/schema';
import { InputFormBlog } from "@/Event/Event";
import Inputs from '@/components/Shared/Input/Input';
import Button from '@/components/Shared/Button/Button';
import { useRouter } from 'next/router';
import { BlogDataUpdate } from '@/services/createBlogService';
interface BlogFormProps {
  initialBlogData?: any;
  Message: (value: boolean) => void;
  SuccessMessage: (value: boolean) => void;
  Success: (value: string) => void;
}
export default function BlogForm({ initialBlogData, Message, SuccessMessage, Success }: BlogFormProps) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(blogSchema),
    defaultValues: initialBlogData || {}
  });
  const router = useRouter();
  const onSubmit = async (data: any) => {
    try {
      const response = await BlogDataUpdate(initialBlogData._id, data);
      SuccessMessage(response.success);
      Success(response.message);
      Message(true);
      setTimeout(() => {
        Message(false);
      }, 5000);
      router.push("/admin/blog");
      reset();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      {InputFormBlog.map((e) => (
        <Inputs value={initialBlogData[e.IdName]} Type="Form" key={e.id} IdName={e.IdName} LabelName={e.LabelName} type={e.type} Register={register} Errors={errors} />
      ))}
      <div className="text-right">
        <Button Type="child" className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Submit Course
        </Button>
      </div>
    </form>
  );
};
