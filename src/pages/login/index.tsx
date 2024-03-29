import { useState } from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import useTheme from "@/hooks/useTheme";
import Alerts from "@/components/Shared/Alert/Alert";
import LoginPart from "@/components/Login/Login";
import useAuth from "@/hooks/useAuth";
import LoadingPage from "@/components/Shared/Loading/Loading";
export default function Login() {
        const { theme, toggleTheme } = useTheme();
        const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
        const [numberSuccessMessage, setNumberSuccessMessage] = useState<boolean>();
        const [SuccessMessage, setSuccessMessage] = useState<string>();
        const { user, isLoading } = useAuth({ restricted: false, redirectToHome: true });
        if (isLoading) {
                return <LoadingPage />;
        }
        return (
                <div className={`${theme === 'light' ? 'dark' : 'light'}`}>
                        <div className="bg-white dark:bg-black flex flex-col min-h-screen">
                                <Header Role={user?.role} toggleTheme={toggleTheme} currentTheme={theme} />
                                {showSuccessMessage && <Alerts Message={SuccessMessage} type={numberSuccessMessage} />}
                                <LoginPart Message={setShowSuccessMessage} SuccessMessage={setNumberSuccessMessage} Success={setSuccessMessage} />
                                <Footer />
                        </div>
                </div>
        )
}