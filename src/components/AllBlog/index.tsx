import Card from "../Shared/Card";
import { Blog } from "@/types/auth";
interface AllBlogProps {
        BlogsData: Blog[];
}
export default function AllBlog(props: AllBlogProps) {
        return (
                <main className="flex-grow">
                        <div className="w-full md:w-5/6 mx-auto my-40 flex flex-wrap justify-center gap-4">
                                {props.BlogsData.map((e, i) => (
                                        <Card DataCreate={e.creationDate} type="blog" key={i} instructorName={e.creatorName} CardPhoto={e.cardPhoto} Type={e.tags} title={e.subject} LinkId={e._id} />
                                ))}
                        </div>
                </main>

        )
}