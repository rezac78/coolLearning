import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import useTheme from "@/hooks/useTheme";
import { useState } from "react";
import Alerts from "@/components/Shared/Alert/Alert";
import RegisterPart from "@/components/Register/register";
import cookie from 'cookie';
import { GetServerSidePropsContext } from "next";
import { checkAuthentication } from "@/utils/authentication";
export const getServerSideProps = async (context: GetServerSidePropsContext) => {
        const result: any = await checkAuthentication(context);
        const { req } = context;
        const cookies = cookie.parse(req.headers.cookie || '');
        const token = cookies.cookieToken;
        if (token) {
                return {
                        redirect: {
                                destination: '/',
                                permanent: false,
                        },
                };
        }
        if (result.props) {
                return { props: { role: result.props.role } };
        }
        return { props: {} };
};
export default function Register({ role }: any) {
        const { theme, toggleTheme } = useTheme();
        const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
        const [numberSuccessMessage, setNumberSuccessMessage] = useState<boolean>();
        const [SuccessMessage, setSuccessMessage] = useState<string>();

        return (
                <div className={`${theme === 'light' ? 'dark' : 'light'}`}>
                        <div className="bg-white dark:bg-black flex flex-col min-h-screen">
                                <Header Role={role} toggleTheme={toggleTheme} currentTheme={theme} />
                                {showSuccessMessage && <Alerts Message={SuccessMessage} type={numberSuccessMessage} />}
                                <RegisterPart Message={setShowSuccessMessage} SuccessMessage={setNumberSuccessMessage} Success={setSuccessMessage} />
                                <Footer />
                        </div>
                </div>
        )
}