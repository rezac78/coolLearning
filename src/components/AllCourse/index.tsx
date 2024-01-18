import Card from "../Shared/Card";
import { Course } from "@/types/auth";
interface AllCourseProps {
        CourseData: Course[];
}
export default function AllCourse(props: AllCourseProps) {
        return (
                <main className="flex-grow">
                        <div className="w-full h-min md:w-5/6 mx-auto my-40 flex flex-wrap justify-center gap-4 ">
                                {props.CourseData.map((e,i) => (
                                        <Card LinkId={e._id} keyPart={i} userBy={"25"} chapters={e.chapters} duration={e.duration} description={e.description} title={e.title} courseType={e.courseType} instructorPoster={e.instructorPoster} instructorName={e.instructorName} instructorScope={e.instructorScope} coursePhoto={e.coursePhoto}  type="Recent" />
                                ))}
                        </div>
                </main>

        )
}