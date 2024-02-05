import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { settingsSchema } from '../../../schema/schema';
import { InputSetting } from "@/Event/Event";
import Inputs from '@/components/Shared/Input/Input';
import Button from '@/components/Shared/Button/Button';
import { useRouter } from 'next/router';
import { updateUserDetails } from '@/services/userDashboard';
interface DashSettingProps {
        initialData: any;
        Message: (value: boolean) => void;
        SuccessMessage: (value: boolean) => void;
        Success: (value: string) => void;
}
export default function DashSetting({ initialData, Message, SuccessMessage, Success }: DashSettingProps) {
        const { register, handleSubmit, formState: { errors } } = useForm({
                resolver: yupResolver(settingsSchema),
                defaultValues: initialData || {}
        });
        const router = useRouter();
        const token = localStorage.getItem("accessToken");
        const onSubmit = async (data: any) => {
                const updateData = {
                        ...data,
                        userId: initialData._id 
                };
                try {
                        const response = await updateUserDetails(updateData, token);
                        SuccessMessage(response.success);
                        Success(response.message);
                        Message(true);
                        setTimeout(() => {
                                Message(false);
                        }, 5000);
                } catch (error) {
                        console.error('Error:', error);
                }
        };

        return (
                <form onSubmit={handleSubmit(onSubmit)} className="p-4">
                        {InputSetting.map((e) => (
                                < Inputs value={initialData?.[e.IdName]} Type="Form" key={e.id} IdName={e.IdName} LabelName={e.LabelName} type={e.type} Register={register} Errors={errors} />
                        ))}
                        <div className="text-right mt-4">
                                <Button Type="child" className="inline-flex justify-center rounded-md border border-transparent bg-bg-button hover:bg-bg-button-hover text-dark-color-Font py-2 px-4 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                        change password
                                </Button>
                        </div>
                </form>
        );
};
