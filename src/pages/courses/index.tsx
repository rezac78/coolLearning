import { useEffect, useState } from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import AllCourse from "@/components/AllCourse";

export default function Courses() {
        const [theme, setTheme] = useState('light');
        useEffect(() => {
                const storedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                setTheme(storedTheme);
        }, []);
        const toggleTheme = () => {
                const newTheme = theme === 'light' ? 'dark' : 'light';
                localStorage.setItem('theme', newTheme);
                setTheme(newTheme);
        };
        return (
                <div className={`${theme === 'light' ? 'dark' : 'light'}`}>
                        <div className="bg-white dark:bg-black">
                                <Header toggleTheme={toggleTheme} currentTheme={theme} />
                                <AllCourse/>
                                <Footer />
                        </div>
                </div>
        )
}
