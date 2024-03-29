import { RegisterReq } from '../../services/authService';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registrationSchema } from '../../schema/schema';
import Inputs from "@/components/Shared/Input/Input";
import { InputRegister } from "@/Event/Event";
import Button from "@/components/Shared/Button/Button";
import Links from "@/components/Shared/Link/Link";
import { useRouter } from 'next/router';
interface RegisterPartProps {
        Message: (value: boolean) => void;
        SuccessMessage: (value: boolean) => void;
        Success: (value: string) => void;
}
export default function RegisterPart(props: RegisterPartProps) {
        const { register, handleSubmit, formState: { errors } } = useForm({
                resolver: yupResolver(registrationSchema)
        });
        const router = useRouter();

        const onSubmit = async (data: any) => {
                try {
                        const response = await RegisterReq(data);
                        props.SuccessMessage(response.success);
                        props.Success(response.message);
                        props.Message(true);
                        if (response.token.accessToken) {
                                router.push('/login');
                        }
                        setTimeout(() => {
                                props.Message(false);
                        }, 5000);

                } catch (error) {
                        console.error('Registration failed:', error);
                }
        };
        return (
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
                                                <Inputs Type="validation" key={e.id} IdName={e.IdName} LabelName={e.LabelName} type={e.type} Register={register} Errors={errors} />
                                        ))}
                                        <div className="flex items-center justify-between">
                                                <Button Type="button" Title="Register" className="bg-bg-button hover:bg-bg-button-hover text-dark-color-Font font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />
                                        </div>
                                        <div className='mt-4 text-sm'>
                                                <span className='text-dark-color-Font dark:text-light-color-Font'>Already registered? </span>
                                                <Links className="text-dark-blue" type="font" Href="/login" Title="Login here" />
                                        </div>
                                </form>
                        </div>
                </main>
        )
}