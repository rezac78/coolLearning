import { TableHead, TableHeadChapter } from "../../../Event/Event"
import DeleteButton from "../ButtonDelete/ButtonDelete";
import { Course } from '../../../types/auth';
import Links from "../Link/Link";
import { PencilIcon } from "@heroicons/react/24/solid";
interface TableProps {
        coursesData: Course[];
        onCourseDelete: (courseId: string) => void;
        onChapterDelete: (courseId: string, chapterId: string) => void;
}
export default function Table({ coursesData, onCourseDelete, onChapterDelete }: TableProps) {
        if (coursesData.length === 0) {
                return (
                        <div className="text-center my-4">
                                <p className="text-lg text-gray-500">No courses available.</p>
                        </div>
                );
        }
        return (
                <>
                        <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-200">
                                        <tr>
                                                {TableHead.map((e, i) => (
                                                        <th key={i} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                                                {e.Title}
                                                        </th>
                                                ))}
                                        </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                        {coursesData.map((course: any) => (
                                                <tr key={course._id}>
                                                        {Object.keys(course).map(key => {
                                                                if (key !== '_id' && key !== 'chapters' && key !== '__v') {
                                                                        return (
                                                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 max-w-xs truncate">
                                                                                        {course[key]}
                                                                                </td>
                                                                        );
                                                                }
                                                                return null;
                                                        })}
                                                        <td className="px-6 py-4 whitespace-nowrap flex text-sm font-medium">
                                                                <Links className="text-blue-600 hover:text-blue-800 p-2" Href={`/admin/update/course/${course._id}`} type={"icon"}>
                                                                        <PencilIcon width={20} height={20} />
                                                                </Links>
                                                                <DeleteButton onDelete={() => onCourseDelete(course._id)} />
                                                        </td>
                                                </tr>
                                        ))}
                                </tbody>
                        </table>

                        <table className="min-w-full divide-y divide-gray-400">
                                <thead className="bg-gray-200">
                                        <tr>
                                                {TableHeadChapter.map((e, i) => (
                                                        <th key={i} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{e.Title}</th>
                                                ))}
                                        </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                        {coursesData.flatMap((course: any) => (
                                                <>
                                                        {course.chapters.length > 0 ? (
                                                                course.chapters.map((chapter: any, index: any) => (
                                                                        <tr key={index}>
                                                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{chapter.name}</td>
                                                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{chapter.description}</td>
                                                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                                        <Links target="_blank" className="text-blue-600 hover:text-blue-800" Href={chapter.videoUrl} type={"icon"}>
                                                                                                View Video
                                                                                        </Links>
                                                                                </td>
                                                                                <td className="px-6 py-4 whitespace-nowrap flex text-sm font-medium">
                                                                                        <Links className="text-blue-600 hover:text-blue-800 p-2" Href={`/admin/update/course/${course._id}`} type={"icon"}>
                                                                                                <PencilIcon width={20} height={20} />
                                                                                        </Links>
                                                                                        <DeleteButton onDelete={() => onChapterDelete(course._id, chapter._id)} />
                                                                                </td>
                                                                        </tr>
                                                                ))
                                                        ) : (
                                                                <tr>
                                                                        <td colSpan={TableHead.length} className="text-center text-gray-500">No chapters available for this course.</td>
                                                                </tr>
                                                        )}

                                                </>
                                        ))}
                                </tbody>
                        </table>
                </>
        )
}