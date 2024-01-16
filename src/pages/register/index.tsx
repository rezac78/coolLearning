import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import useTheme from "@/hooks/useTheme";
import { useState } from "react";
import Alerts from "@/components/Shared/Alert/Alert";
import RegisterPart from "@/components/Register/register";
import PublicRoute from "@/components/Route/PublicRoute";
import cookie from 'cookie';
export const getServerSideProps = async (context: { req: any; }) => {
        const { req } = context;
        const cookies = cookie.parse(req.headers.cookie || '');
        const token = cookies.token;
        if (token) {
                return {
                        redirect: {
                                destination: '/',
                                permanent: false,
                        },
                };
        }
        return { props: {} };
};
export default function Register() {
        const { theme, toggleTheme } = useTheme();
        const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
        const [numberSuccessMessage, setNumberSuccessMessage] = useState<boolean>();
        const [SuccessMessage, setSuccessMessage] = useState<string>();

        return (
                <PublicRoute>
                        <div className={`${theme === 'light' ? 'dark' : 'light'}`}>
                                <div className="bg-white dark:bg-black flex flex-col min-h-screen">
                                        <Header toggleTheme={toggleTheme} currentTheme={theme} />
                                        {showSuccessMessage && <Alerts Message={SuccessMessage} type={numberSuccessMessage} />}
                                        <RegisterPart Message={setShowSuccessMessage} SuccessMessage={setNumberSuccessMessage} Success={setSuccessMessage} />
                                        <Footer />
                                </div>
                        </div>
                </PublicRoute>
        )
}