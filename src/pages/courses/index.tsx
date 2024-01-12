import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import AllCourse from "@/components/AllCourse";
import useTheme from "@/hooks/useTheme";

export default function Courses() {
        const { theme, toggleTheme } = useTheme();
        return (
                <div className={`${theme === 'light' ? 'dark' : 'light'}`}>
                        <div className="bg-white dark:bg-black flex flex-col min-h-screen">
                                <Header toggleTheme={toggleTheme} currentTheme={theme} />
                                <AllCourse />
                                <Footer />
                        </div>
                </div>
        )
}
