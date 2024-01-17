import { TableHead, TableHeadChapter } from "../../../Event/Event"
import DeleteButton from "../ButtonDelete/ButtonDelete";
import Links from "../Link/Link";
import { Course, Chapter } from '../../../types/auth';
interface TableProps {
        coursesData: Course[];
        onCourseDelete: (courseId: string) => void;
}
export default function Table({ coursesData, onCourseDelete }: TableProps) {
        return (
                <>
                        <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-200">
                                        <tr>
                                                {TableHead.map((e, i) => (
                                                        <th key={i} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{e.Title}</th>
                                                ))}
                                        </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                        {coursesData.map((course: any) => (
                                                <tr key={course._id}>
                                                        {Object.keys(course).map(key => {
                                                                if (key !== '_id' && key !== 'chapters' && key !== '__v') {
                                                                        return <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course[key]}</td>;
                                                                }
                                                                return null;
                                                        })}
                                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                                <Links className="text-indigo-600 hover:text-indigo-900 mr-4" Href='#' type={"icon"}>Edit</Links>
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
                                        {coursesData.flatMap((course: any) => course.chapters.map((chapter: any, index: any) => (
                                                <tr key={index}>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{chapter.name}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{chapter.description}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                <Links target="_blank" className="text-blue-600 hover:text-blue-800" Href={chapter.videoUrl} type={"icon"}>
                                                                        View Video
                                                                </Links>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                                <Links className="text-indigo-600 hover:text-indigo-900 mr-4" Href='#' type={"icon"}>Edit</Links>
                                                                <DeleteButton onDelete={() => onCourseDelete(course._id)} />
                                                        </td>
                                                </tr>
                                        )))}
                                </tbody>
                        </table>
                </>
        )
}