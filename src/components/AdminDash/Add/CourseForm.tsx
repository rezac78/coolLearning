import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { courseSchema } from '../../../schema/schema';
import { InputForm, InputFormChapter } from "@/Event/Event";
import Inputs from '@/components/Shared/Input/Input';
import Button from '@/components/Shared/Button/Button';
import { CourseReq } from '@/services/createCourseService';
import { useRouter } from 'next/router';
interface CourseFormProps {
  Message: (value: boolean) => void;
  SuccessMessage: (value: boolean) => void;
  Success: (value: string) => void;
}
export default function CourseForm(props: CourseFormProps) {
  const { register, control, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(courseSchema)
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'chapters'
  });
  const onSubmit = async (data: any) => {
    const token = localStorage.getItem("accessToken");
    const router = useRouter();
    try {
      const response = await CourseReq(data, token);
      props.SuccessMessage(response.success);
      props.Success(response.message);
      props.Message(true);
      setTimeout(() => {
        props.Message(false);
      }, 5000);
      router.push("/admin/course");
      reset();
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      <div className="flex-1 p-4 shadow rounded-lg">
        {InputForm.map((e) => (
          <Inputs Type="Form" key={e.id} IdName={e.IdName} LabelName={e.LabelName} type={e.type} Register={register} Errors={errors} />
        ))}
      </div>
      {fields.map((field, index) => (
        <div key={field.id} className="">
          {InputFormChapter.map((e) => (
            <Inputs index={index} Type="Formatters" key={e.id} IdName={e.IdName} LabelName={e.LabelName} type={e.type} Register={register} Errors={errors} />
          ))}
          <div className="p-4">
            <Button className="mt-2 p-2 bg-dark-red hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 text-dark-color-Font rounded" Type="child" Click={() => remove(index)}>
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
        <Button className="inline-flex justify-center rounded-md border border-transparent bg-bg-button hover:bg-bg-button-hover text-dark-color-Font py-2 px-4 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" Type="child">
          Submit Course
        </Button>
      </div>
    </form>
  );
};
