import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import useTheme from "@/hooks/useTheme";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import registrationSchema from '../../schema/schema';
import Inputs from "@/components/Shared/Input/Input";
import { InputRegister } from "@/Event/Event";
import Button from "@/components/Shared/Button/Button";
export default function Register() {
        const { theme, toggleTheme } = useTheme();
        const { register, handleSubmit, formState: { errors } } = useForm({
                resolver: yupResolver(registrationSchema)
        });
        const onSubmit = (data: any) => {
                console.log(data);
        };
        return (
                <div className={`${theme === 'light' ? 'dark' : 'light'}`}>
                        <div className="bg-white dark:bg-black">
                                <Header toggleTheme={toggleTheme} currentTheme={theme} />
                                <div className="relative flex items-center justify-center h-screen">
                                        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                                                style={{
                                                        backgroundImage: 'url(/RegisterPoster.png)',
                                                        filter: 'brightness(30%)'
                                                }}></div>
                                        <div className="relative bg-light-bg-Form dark:bg-dark-bg-Form bg-opacity-80 p-10 rounded-lg shadow-lg">
                                                <h2 className="text-2xl text-dark-color-Font dark:text-light-color-Font font-bold mb-4">Register</h2>
                                                <form onSubmit={handleSubmit(onSubmit)}>
                                                        {InputRegister.map((e) => (
                                                                <Inputs Ekey={e.id} IdName={e.IdName} LabelName={e.LabelName} type={e.type} Register={register} Errors={errors} />
                                                        ))}
                                                        <div className="flex items-center justify-between">
                                                                <Button Title="Register" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />
                                                        </div>
                                                </form>
                                        </div>
                                </div>
                                <Footer />
                        </div>
                </div>
        )
}