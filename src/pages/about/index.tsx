import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import About from "@/components/About-Us";
import useTheme from "@/hooks/useTheme";
import useAuth from "@/hooks/useAuth";
export default function AboutUs() {
        const { theme, toggleTheme } = useTheme();
        const role = useAuth({});
        return (
                <div className={`${theme === 'light' ? 'dark' : 'light'}`}>
                        <div className="bg-white dark:bg-black flex flex-col min-h-screen">
                                <Header Role={role?.role} toggleTheme={toggleTheme} currentTheme={theme} />
                                <About />
                                <Footer />
                        </div>
                </div>
        )
}