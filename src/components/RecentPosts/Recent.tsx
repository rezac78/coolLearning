import Card from '../Shared/Card';
import { Course } from '@/types/auth';
interface RecentProps {
        CourseData: Course[];
}
export default function Recent(props:RecentProps) {
        return (
                <>
                        <div className="w-11/12	md:w-3/6 mx-auto text-center py-6">
                                <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-light-color-Font dark:text-dark-color-Font">Recent posts</h1>
                                <p className="text-xs sm:text-base mb-6 text-light-color-Font dark:text-dark-color-Font">
                                        Our goal in establishing Cool Learning is that anyone with any background and knowledge can easily enter the beautiful and lucrative world of programming.
                                </p>
                        </div>
                        <div className="w-full md:w-5/6 mx-auto mb-5 flex flex-wrap justify-center gap-4">
                                {props.CourseData.slice(0, 3).map((e, i) => (
                                        <Card LinkId={e._id} keyPart={i} user={e.peopleNumber} chapters={e.chapters} duration={e.duration} description={e.description} title={e.title} Type={e.courseType} instructorPoster={e.instructorPoster} instructorName={e.instructorName} instructorScope={e.instructorScope} CardPhoto={e.coursePhoto}  type="courses" />
                                ))}
                        </div>
                </>
        )
}