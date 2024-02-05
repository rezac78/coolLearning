import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import useTheme from "@/hooks/useTheme";
import useAuth from "@/hooks/useAuth";
import PartCheckout from "@/components/PartCheckout/PartCheckout";
import { useRouter } from "next/router";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import { purchaseCourses } from "@/services/userDashboard";
import { useState } from "react";
import Alerts from "@/components/Shared/Alert/Alert";
export default function Checkout() {
        const { theme, toggleTheme } = useTheme();
        const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
        const [SuccessMessage, setSuccessMessage] = useState<string>();
        const [numberSuccessMessage, setNumberSuccessMessage] = useState<boolean>();
        const { user } = useAuth({ restricted: true });
        const router = useRouter();
        const { cartItems, emptyCart } = useShoppingCart();
        const handlePurchase = async () => {
                const token = localStorage.getItem("accessToken");
                if (!user) {
                        router.push('/login');
                        return;
                }
                const courseIds = cartItems.map(item => item._id);
                try {
                        const response = await purchaseCourses(courseIds, token);
                        setNumberSuccessMessage(response.success);
                        setSuccessMessage(response.message);
                        setShowSuccessMessage(true);
                        setTimeout(() => {
                                setShowSuccessMessage(false);
                                emptyCart();        
                                router.push('/user/dashboard');
                        }, 3000);
                } catch (error) {
                        console.error("Error during purchase:", error);
                }
        };
        return (
                <div className={`${theme === 'light' ? 'dark' : 'light'}`}>
                        <div className="bg-white dark:bg-black flex flex-col min-h-screen">
                                <Header Role={user?.role} toggleTheme={toggleTheme} currentTheme={theme} />
                                {showSuccessMessage && <Alerts Message={SuccessMessage} type={numberSuccessMessage} />}
                                <PartCheckout onPurchase={handlePurchase} />
                                <Footer />
                        </div>
                </div>
        )
}