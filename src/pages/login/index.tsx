import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import useTheme from "@/hooks/useTheme";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginValidationSchema } from '../../schema/schema';
import Inputs from "@/components/Shared/Input/Input";
import { InputLogin } from "@/Event/Event";
import Button from "@/components/Shared/Button/Button";
import Links from "@/components/Shared/Link/Link";
export default function Login() {
        const { theme, toggleTheme } = useTheme();
        const { register, handleSubmit, formState: { errors } } = useForm({
                resolver: yupResolver(loginValidationSchema)
        });
        const onSubmit = (data: any) => {
                console.log(data);
        };
        return (
                <div className={`${theme === 'light' ? 'dark' : 'light'}`}>
                        <div className="bg-white dark:bg-black flex flex-col min-h-screen">
                                <Header toggleTheme={toggleTheme} currentTheme={theme} />
                                <main className="relative flex-grow flex items-center justify-center">
                                        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                                                style={{
                                                        backgroundImage: 'url(/LoginPoster.png)',
                                                        filter: 'brightness(30%)'
                                                }}>
                                        </div>
                                        <div className="relative bg-light-bg-Form dark:bg-dark-bg-Form bg-opacity-80 p-3 sm:p-10 rounded-lg shadow-lg z-10">
                                                <h2 className="text-2xl text-dark-color-Font dark:text-light-color-Font font-bold mb-4">Login</h2>
                                                <form onSubmit={handleSubmit(onSubmit)}>
                                                        {InputLogin.map((e) => (
                                                                <Inputs Ekey={e.id} IdName={e.IdName} LabelName={e.LabelName} type={e.type} Register={register} Errors={errors} />
                                                        ))}
                                                        <div className="flex items-center justify-between">
                                                                <Button Title="Login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />
                                                        </div>
                                                        <div className='mt-4 text-sm'>
                                                                <span className='text-dark-color-Font dark:text-light-color-Font'>You have not logged in yet? </span>
                                                                <Links className="text-blue-600" Href="/register" Title="Register here" />
                                                        </div>
                                                </form>
                                        </div>
                                </main>
                                <Footer />
                        </div>
                </div>
        )
}