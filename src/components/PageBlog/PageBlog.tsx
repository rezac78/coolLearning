import Header from "../Header";
import useTheme from "@/hooks/useTheme";
import Footer from "../Footer/Footer";
import HeaderPage from "./HeaderPage/HeaderPage";
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";
interface PageBlogPartProps {
        initialBlogData?: any;
        Role: string | null;
        CommentData: any;
}
export default function PageBlogPart(props: PageBlogPartProps) {
        const { theme, toggleTheme } = useTheme();;
        console.log(props.initialBlogData)
        return (
                <div className={`${theme === 'light' ? 'dark' : 'light'}`}>
                        <div className="bg-white dark:bg-black flex flex-col min-h-screen">
                                <Header Role={props.Role} toggleTheme={toggleTheme} currentTheme={theme} />
                                <div className="max-w-6xl mx-auto mt-5">
                                        <HeaderPage DataCreate={props.initialBlogData.creationDate} NameTeach={props.initialBlogData.creatorName} HeadTitle={props.initialBlogData.subject} />
                                        <div className="flex flex-col md:flex-row mt-5">
                                                <div className="md:flex-1 w-full md:w-2/6 p-4 rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
                                                        <div className="mt-6">
                                                                <LeftSide creatorScope={props.initialBlogData.creatorScope} Profile={props.initialBlogData.creatorPhoto} tags={props.initialBlogData.tags} creatorName={props.initialBlogData.creatorName} />
                                                        </div>
                                                </div>
                                                <div className="flex-2 w-full md:w-4/6 overflow-y-auto mt-4 md:mt-0 md:ml-6">
                                                        <RightSide CommentData={props.CommentData} blogId={props.initialBlogData._id} LongDescription={props.initialBlogData.description} SrcImage={props.initialBlogData.cardPhoto} />
                                                </div>
                                        </div>
                                </div>
                                <Footer />
                        </div>
                </div>
        )
}