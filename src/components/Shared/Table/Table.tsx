import { TableHead, TableHeadChapter, TableHeadBlog } from "../../../Event/Event"
import DeleteButton from "../ButtonDelete/ButtonDelete";
import { Blog, Course } from '../../../types/auth';
import Links from "../Link/Link";
import { PencilIcon } from "@heroicons/react/24/solid";
interface TableProps {
        data: Course[] | Blog[];
        type: 'course' | 'blog';
        onItemDelete: (itemId: string) => void;
        onChapterDelete?: (courseId: string, chapterId: string) => void;
}
export default function Table({ data, type, onItemDelete, onChapterDelete }: TableProps) {
        if (data.length === 0) {
                return (
                        <div className="text-center my-4">
                                <p className="text-lg text-gray-500">No items available.</p>
                        </div>
                );
        }
        const isCourse = type === 'course';
        const renderCoursesTable = () => (
                <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-200">
                                <tr>
                                        {TableHead.map((e, i) => (
                                                <th key={e.Title} scope="col" className="px-6 py-3 text-left text-xs font-medium text-dark-gray uppercase">
                                                        {e.Title}
                                                </th>
                                        ))}
                                </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                                {data.map((course: any) => (
                                        <tr key={course._id}>
                                                {Object.keys(course).map(key => {
                                                        if (key !== '_id' && key !== 'chapters' && key !== '__v') {
                                                                return (
                                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-dark-gray max-w-xs truncate">
                                                                                {course[key]}
                                                                        </td>
                                                                );
                                                        }
                                                        return null;
                                                })}
                                                <td className="px-6 py-4 whitespace-nowrap flex text-sm font-medium">
                                                        <Links IdName="PencilIcon" className="text-blue-600 hover:text-blue-800 p-2" Href={`/admin/update/course/${course._id}`} type={"icon"}>
                                                                <PencilIcon width={20} height={20} />
                                                        </Links>
                                                        <DeleteButton onDelete={() => onItemDelete(course._id)} />
                                                </td>
                                        </tr>
                                ))}
                        </tbody>
                </table>
        );
        const renderCourseChaptersTable = () => (
                <table className="min-w-full divide-y divide-gray-400">
                        <thead className="bg-gray-200">
                                <tr>
                                        {TableHeadChapter.map((e) => (
                                                <th key={e.Title} scope="col" className="px-6 py-3 text-left text-xs font-medium text-dark-gray uppercase tracking-wider">{e.Title}</th>
                                        ))}
                                </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                                {data.flatMap((course: any, courseIndex) =>
                                        course.chapters.length > 0 ? (
                                                course.chapters.map((chapter: any) => (
                                                        <tr key={`${course._id}-${chapter._id}`}>
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-dark-gray">{chapter.name}</td>
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-dark-gray">{chapter.description}</td>
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-dark-gray">
                                                                        <Links target="_blank" className="text-blue-600 hover:text-blue-800" Href={chapter.videoUrl} type={"icon"}>
                                                                                View Video
                                                                        </Links>
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-nowrap flex text-sm font-medium">
                                                                        <Links IdName="PencilIcon" className="text-blue-600 hover:text-blue-800 p-2" Href={`/admin/update/course/${course._id}`} type={"icon"}>
                                                                                <PencilIcon width={20} height={20} />
                                                                        </Links>
                                                                        <DeleteButton onDelete={() => {
                                                                                if (onChapterDelete) {
                                                                                        onChapterDelete(course._id, chapter._id);
                                                                                }
                                                                        }} />
                                                                </td>
                                                        </tr>
                                                ))
                                        ) : (
                                                <tr key={`course-no-chapters-${courseIndex}`}>
                                                        <td colSpan={TableHead.length} className="text-center text-gray-500">No chapters available for this course.</td>
                                                </tr>
                                        )
                                )}
                        </tbody>
                </table>
        );
        const renderBlogsTable = () => (
                <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-200">
                                <tr>
                                        {TableHeadBlog.map((e) => (
                                                <th key={e.Title} scope="col" className="px-6 py-3 text-left text-xs font-medium text-dark-gray uppercase">
                                                        {e.Title}
                                                </th>
                                        ))}
                                </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                                {data.map((blog: any) => (
                                        <tr key={blog._id}>
                                                {Object.keys(blog).map(key => {
                                                        if (key !== '_id' && key !== '__v') {
                                                                return (
                                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-dark-gray max-w-xs truncate">
                                                                                {blog[key]}
                                                                        </td>
                                                                );
                                                        }
                                                        return null;
                                                })}
                                                <td className="px-6 py-4 whitespace-nowrap flex text-sm font-medium">
                                                        <Links IdName="PencilIcon" className="text-blue-600 hover:text-blue-800 p-2" Href={`/admin/update/blog/${blog._id}`} type={"icon"}>
                                                                <PencilIcon width={20} height={20} />
                                                        </Links>
                                                        <DeleteButton onDelete={() => onItemDelete(blog._id)} />
                                                </td>
                                        </tr>
                                ))}
                        </tbody>
                </table>
        );
        return (
                <>
                        {isCourse ? renderCoursesTable() : renderBlogsTable()}
                        {isCourse && renderCourseChaptersTable()}
                </>
        )
}