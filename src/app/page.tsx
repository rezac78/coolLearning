"use client"
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import QuestionsPart from "@/components/QuestionsPart/QuestionsPart";
import Recent from "@/components/RecentPosts/Recent";
import Introduction from "@/components/introduction";
import useTheme from "@/hooks/useTheme";

export default function Home() {
        const { theme, toggleTheme } = useTheme();
        return (
                <div className={`${theme === 'light' ? 'dark' : 'light'}`}>
                        <div className="bg-white dark:bg-black">
                                <Header toggleTheme={toggleTheme} currentTheme={theme} />
                                <Introduction />
                                <QuestionsPart />
                                <Recent />
                                <Footer />
                        </div>
                </div>
        )
}
