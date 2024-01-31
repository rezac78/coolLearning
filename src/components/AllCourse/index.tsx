import Card from "../Shared/Card";
import { Course } from "@/types/auth";
interface AllCourseProps {
        CourseData: Course[];
}
export default function AllCourse(props: AllCourseProps) {
        return (
                <main className="flex-grow">
                        <div className="w-full h-min md:w-5/6 mx-auto my-40 flex flex-wrap justify-center gap-4 ">
                                {props.CourseData.length > 0 ? (
                                        props.CourseData.map((e) => (
                                                <Card
                                                        type="courses"
                                                        LinkId={e._id}
                                                        key={e._id}
                                                        user={e.purchaseCount}
                                                        chapters={e.chapters}
                                                        duration={e.duration}
                                                        description={e.description}
                                                        title={e.title}
                                                        Type={e.courseType}
                                                        instructorPoster={e.instructorPoster}
                                                        instructorName={e.instructorName}
                                                        instructorScope={e.instructorScope}
                                                        CardPhoto={e.coursePhoto}
                                                />
                                        ))
                                ) : (
                                        <p className="text-center w-full">No courses found matching your search criteria.</p>
                                )}
                        </div>
                </main>
        )
}