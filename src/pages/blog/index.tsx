import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import AllBlog from "@/components/AllBlog";
import useTheme from "@/hooks/useTheme";

export default function Courses() {
        const { theme, toggleTheme } = useTheme();
        return (
                <div className={`${theme === 'light' ? 'dark' : 'light'}`}>
                        <div className="bg-white dark:bg-black">
                                <Header toggleTheme={toggleTheme} currentTheme={theme} />
                                <AllBlog/>
                                <Footer />
                        </div>
                </div>
        )
}
