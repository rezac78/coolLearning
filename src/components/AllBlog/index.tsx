import { useState } from "react";
import Card from "../Shared/Card";
import { Blog } from "@/types/auth";
import { LikeBlog } from "@/services/createBlogService";
import { jwtDecode } from "jwt-decode"
import Alerts from "../Shared/Alert/Alert";
interface AllBlogProps {
        BlogsData: Blog[];
}
export default function AllBlog(props: AllBlogProps) {
        const [blogsData, setBlogsData] = useState(props.BlogsData);
        const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
        const [SuccessMessage, setSuccessMessage] = useState<string>();
        const handleLike = async (blogId: string) => {
                const token: any = localStorage.getItem("token");
                if (!token) {
                        setShowSuccessMessage(true);
                        setSuccessMessage("You must log in to like.");
                        setTimeout(() => {
                                setShowSuccessMessage(false);
                        }, 3000);
                        return;
                }
                try {
                        const decodedToken: any = jwtDecode(token);
                        const userId = decodedToken.id;
                        const response = await LikeBlog(blogId, token);
                        const updatedBlogs = blogsData.map(blog => {
                                if (blog._id === blogId) {
                                        const isLiked = blog.likes.includes(userId);
                                        const updatedLikes = isLiked
                                                ? blog.likes.filter((id: any) => id !== userId)
                                                : [...blog.likes, userId];
                                        return { ...blog, likes: updatedLikes };
                                }
                                return blog;
                        });
                        setBlogsData(updatedBlogs);
                } catch (error) {
                        console.error('Error toggling like on the blog post:', error);
                }
        };
        return (
                <main className="flex-grow">
                        {showSuccessMessage && <Alerts Message={SuccessMessage}/>}
                        <div className="w-full md:w-5/6 mx-auto my-40 flex flex-wrap justify-center gap-4">
                                {blogsData.map((e, i) => (
                                        <Card LikeNumber={e.likes.length} handleLike={handleLike} commentsCount={e.commentsCount} DataCreate={e.creationDate} type="blog" key={i} instructorName={e.creatorName} CardPhoto={e.cardPhoto} Type={e.tags} title={e.subject} LinkId={e._id} />
                                ))}
                        </div>
                </main>
        )
}