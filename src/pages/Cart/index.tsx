import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import useTheme from "@/hooks/useTheme";
import useAuth from "@/hooks/useAuth";
import ShoppingCart from "@/components/Cart/CartPart";
export default function Cart() {
        const { theme, toggleTheme } = useTheme();
        const { user } = useAuth({ restricted: false });
        return (
                <div className={`${theme === 'light' ? 'dark' : 'light'}`}>
                        <div className="bg-white dark:bg-black flex flex-col min-h-screen">
                                <Header Role={user?.role} toggleTheme={toggleTheme} currentTheme={theme} />
                                <ShoppingCart />
                                <Footer />
                        </div>
                </div>
        )
}