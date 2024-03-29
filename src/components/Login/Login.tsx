import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginValidationSchema } from '../../schema/schema';
import Inputs from "@/components/Shared/Input/Input";
import { InputLogin } from "@/Event/Event";
import Button from "@/components/Shared/Button/Button";
import Links from "@/components/Shared/Link/Link";
import { LoginReq } from '../../services/authService';
import { useRouter } from "next/router";
import { jwtDecode } from "jwt-decode"
interface LoginPartProps {
        Message: (value: boolean) => void;
        SuccessMessage: (value: boolean) => void;
        Success: (value: string) => void;
}
export default function LoginPart(props: LoginPartProps) {
        const { register, handleSubmit, formState: { errors } } = useForm({
                resolver: yupResolver(loginValidationSchema)
        });
        const router = useRouter();
        const onSubmit = async (data: any) => {
                try {
                        const response = await LoginReq(data);
                        localStorage.setItem('accessToken', response.token.accessToken);
                        localStorage.setItem('refreshToken', response.token.refreshToken);                        
                        props.SuccessMessage(response.success);
                        props.Success(response.message);
                        props.Message(true);
                        const decoded: any = jwtDecode(response.token.accessToken);
                        if (response.token) {
                                if (decoded.role === "admin") {
                                        router.push("/admin/dashboard");
                                } else if (decoded.role === "user") {
                                        router.push("/user/dashboard");
                                }
                        }
                        setTimeout(() => {
                                props.Message(false);
                        }, 5000);

                } catch (error) {
                        console.error('Login failed:', error);
                }
        };
        return (
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
                                        <div>
                                                {InputLogin.map((e) => (
                                                        <Inputs Type="validation" key={e.id} IdName={e.IdName} LabelName={e.LabelName} type={e.type} Register={register} Errors={errors} />
                                                ))}
                                        </div>
                                        <div className="flex items-center justify-between mt-3">
                                                <Button Type="button" Title="Login" className="bg-bg-button hover:bg-bg-button-hover text-dark-color-Font font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />
                                        </div>
                                        <div className='mt-4 text-sm'>
                                                <span className='text-dark-color-Font dark:text-light-color-Font'>You have not logged in yet? </span>
                                                <Links className="text-dark-blue" Href="/register" type="font" Title="Register here" />
                                        </div>
                                </form>
                        </div>
                </main>
        )
}