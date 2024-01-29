import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import useTheme from "@/hooks/useTheme";
import useAuth from "@/hooks/useAuth";
import PartCheckout from "@/components/PartCheckout/PartCheckout";
import { useRouter } from "next/router";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import { purchaseCourses } from "@/services/userDashboard";
export default function Checkout() {
        const { theme, toggleTheme } = useTheme();
        const { user } = useAuth({ restricted: true });
        const router = useRouter();
        const { cartItems, emptyCart } = useShoppingCart();
        const handlePurchase = async () => {
                const token = localStorage.getItem("token");
                if (!user) {
                        router.push('/login');
                        return;
                }
                const courseIds = cartItems.map(item => item._id);
                try {
                        const response = await purchaseCourses(courseIds, token);
                        console.log(response);
                        emptyCart();
                        // router.push('/user/dashboard');
                } catch (error) {
                        console.error("Error during purchase:", error);
                }
        };
        return (
                <div className={`${theme === 'light' ? 'dark' : 'light'}`}>
                        <div className="bg-white dark:bg-black flex flex-col min-h-screen">
                                <Header Role={user?.role} toggleTheme={toggleTheme} currentTheme={theme} />
                                <PartCheckout onPurchase={handlePurchase} />
                                <Footer />
                        </div>
                </div>
        )
}