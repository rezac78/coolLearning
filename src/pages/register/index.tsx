import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import { useRouter } from 'next/router';
import useTheme from "@/hooks/useTheme";
import { RegisterReq } from '../../services/authService';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registrationSchema } from '../../schema/schema';
import Inputs from "@/components/Shared/Input/Input";
import { InputRegister } from "@/Event/Event";
import Button from "@/components/Shared/Button/Button";
import Links from "@/components/Shared/Link/Link";
import { useState } from "react";
import Alerts from "@/components/Shared/Alert/Alert";
export default function Register() {
        const { theme, toggleTheme } = useTheme();
        const { register, handleSubmit, formState: { errors } } = useForm({
                resolver: yupResolver(registrationSchema)
        });
        const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
        const [numberSuccessMessage, setNumberSuccessMessage] = useState();
        const [SuccessMessage, setSuccessMessage] = useState();
        const router = useRouter();
        const onSubmit = async (data: any) => {
                try {
                        const response = await RegisterReq(data);
                        setNumberSuccessMessage(response.success);
                        setSuccessMessage(response.message);
                        setShowSuccessMessage(true);
                        setTimeout(() => {
                                setShowSuccessMessage(false);
                                router.push('/login');
                        }, 5000);

                } catch (error) {
                        console.error('Registration failed:', error);
                }
        };
        return (
                <div className={`${theme === 'light' ? 'dark' : 'light'}`}>
                        <div className="bg-white dark:bg-black flex flex-col min-h-screen">
                                <Header toggleTheme={toggleTheme} currentTheme={theme} />
                                {showSuccessMessage && <Alerts Message={SuccessMessage} type={numberSuccessMessage} />}
                                <main className="relative flex-grow flex items-center justify-center">
                                        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                                                style={{
                                                        backgroundImage: 'url(/RegisterPoster.png)',
                                                        filter: 'brightness(30%)'
                                                }}>
                                        </div>
                                        <div className="relative bg-light-bg-Form dark:bg-dark-bg-Form bg-opacity-80 p-3 sm:p-10 rounded-lg shadow-lg z-10">
                                                <h2 className="text-2xl text-dark-color-Font dark:text-light-color-Font font-bold mb-4">Register</h2>
                                                <form onSubmit={handleSubmit(onSubmit)}>
                                                        {InputRegister.map((e) => (
                                                                <Inputs Ekey={e.id} IdName={e.IdName} LabelName={e.LabelName} type={e.type} Register={register} Errors={errors} />
                                                        ))}
                                                        <div className="flex items-center justify-between">
                                                                <Button Title="Register" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />
                                                        </div>
                                                        <div className='mt-4 text-sm'>
                                                                <span className='text-dark-color-Font dark:text-light-color-Font'>Already registered? </span>
                                                                <Links className="text-blue-600" Href="/login" Title="Login here" />
                                                        </div>
                                                </form>
                                        </div>
                                </main>
                                <Footer />
                        </div>
                </div>
        )
}