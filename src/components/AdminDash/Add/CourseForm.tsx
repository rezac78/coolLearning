import React, { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { courseSchema } from '../../../schema/schema';
import { InputForm, InputFormChapter } from "@/Event/Event";
import Inputs from '@/components/Shared/Input/Input';
import Button from '@/components/Shared/Button/Button';
import { CourseReq } from '@/services/createCourseService';

export default function CourseForm() {
  const { register, control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(courseSchema)
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'chapters'
  });

  const onSubmit = async (data: any) => {
    const getToken = localStorage.getItem('token');
    try {
      const response = await CourseReq(data, getToken);
      console.log(response)
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      {InputForm.map((e) => (
        <Inputs Type="Form" Ekey={e.id} IdName={e.IdName} LabelName={e.LabelName} type={e.type} Register={register} Errors={errors} />
      ))}
      {fields.map((field, index) => (
        <div key={field.id} className="">
          {InputFormChapter.map((e) => (
            <Inputs index={index} Type="Formatters" Ekey={e.id} IdName={e.IdName} LabelName={e.LabelName} type={e.type} Register={register} Errors={errors} />
          ))}
          <div className="p-4">
            <Button className="mt-2 p-2 bg-red-500 text-white rounded" Type="child" Click={() => remove(index)}>
              Remove Chapter
            </Button>
          </div>
        </div>
      ))}
      <div className="p-4">
        <Button className="inline-flex justify-center rounded-md border border-transparent bg-green-600 mt-3 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" Type="child" Click={() => append({ name: '', description: '', videoUrl: '' })}>
          Add Chapter
        </Button>
      </div>
      <div className="text-right">
        <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Submit Course
        </button>
      </div>
    </form>
  );
};
