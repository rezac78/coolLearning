import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import About from "@/components/About-Us";
import useTheme from "@/hooks/useTheme";

export default function AboutUs() {
        const { theme, toggleTheme } = useTheme();
        return (
                <div className={`${theme === 'light' ? 'dark' : 'light'}`}>
                        <div className="bg-white dark:bg-black">
                                <Header toggleTheme={toggleTheme} currentTheme={theme} />
                                <About />
                                <Footer />
                        </div>
                </div>
        )
}
