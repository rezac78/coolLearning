import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { courseSchema } from '../../../schema/schema';
import { InputForm, InputFormChapter } from "@/Event/Event";
import Inputs from '@/components/Shared/Input/Input';
import Button from '@/components/Shared/Button/Button';
import { CourseDataUpdate } from '@/services/createCourseService';
import { useRouter } from 'next/router';
interface CourseFormProps {
  initialCourseData?: any;
  Message: (value: boolean) => void;
  SuccessMessage: (value: boolean) => void;
  Success: (value: string) => void;
}
export default function CourseForm({ initialCourseData, Message, SuccessMessage, Success }: CourseFormProps) {
  const { register, control, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(courseSchema),
    defaultValues: initialCourseData || {}
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'chapters'
  });
  const router = useRouter();
  const token = localStorage.getItem("accessToken");
  const onSubmit = async (data: any) => {
    try {
      const response = await CourseDataUpdate(initialCourseData._id, data, token);
      SuccessMessage(response.success);
      Success(response.message);
      Message(true);
      setTimeout(() => {
        Message(false);
      }, 5000);
      router.push("/admin/course");
      reset();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      {InputForm.map((e) => (
        <Inputs value={initialCourseData[e.IdName]} Type="Form" key={e.id} IdName={e.IdName} LabelName={e.LabelName} type={e.type} Register={register} Errors={errors} />
      ))}
      {fields.map((field, index) => (
        <div key={field.id} className="">
          {InputFormChapter.map((e) => (
            <Inputs value={initialCourseData[e.IdName]} index={index} Type="Formatters" key={e.id} IdName={e.IdName} LabelName={e.LabelName} type={e.type} Register={register} Errors={errors} />
          ))}
          <div className="p-4">
            <Button className="mt-2 p-2 bg-red-700 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 text-dark-color-Font rounded" Type="child" Click={() => remove(index)}>
              Remove Chapter
            </Button>
          </div>
        </div>
      ))}
      <div className="p-4">
        <Button className="inline-flex justify-center rounded-md border border-transparent bg-dark-green mt-3 py-2 px-4 text-sm font-medium text-dark-color-Font shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" Type="child" Click={() => append({ name: '', description: '', videoUrl: '' })}>
          Add Chapter
        </Button>
      </div>
      <div className="text-right">
        <Button Type="child" className="inline-flex justify-center rounded-md border border-transparent bg-bg-button hover:bg-bg-button-hover text-dark-color-Font py-2 px-4 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Submit Course
        </Button>
      </div>
    </form>
  );
};
