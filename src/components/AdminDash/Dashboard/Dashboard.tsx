import React, { useState } from 'react';
import Table from '@/components/Shared/Table/Table';
import { Course } from '../../../types/auth';
import { CourseDeletedData, CourseDeletedChapter } from '@/services/createCourseService';
import Alerts from '@/components/Shared/Alert/Alert';


interface DashboardProps {
        initialCoursesData: Course[];
}

export default function Dashboard({ initialCoursesData }: DashboardProps) {
        const [coursesData, setCoursesData] = useState<Course[]>(initialCoursesData);
        const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
        const [numberSuccessMessage, setNumberSuccessMessage] = useState<boolean>();
        const [SuccessMessage, setSuccessMessage] = useState<string>();
        const deleteCourse = async (courseId: string) => {
                try {
                        const response = await CourseDeletedData(courseId);
                        setCoursesData(coursesData.filter(course => course._id !== courseId));
                        setShowSuccessMessage(true);
                        setNumberSuccessMessage(response.success);
                        setSuccessMessage(response.message || 'Course deleted successfully');
                } catch (error) {
                        console.error('Error deleting course', error);
                        setShowSuccessMessage(true);
                        setNumberSuccessMessage(false);
                        setSuccessMessage('Failed to delete the course');
                }
                setTimeout(() => setShowSuccessMessage(false), 5000);
        };
        const deleteChapter = async (courseId: string, chapterId: string) => {
                try {
                        const response = await CourseDeletedChapter(courseId, chapterId);
                        const updatedCourses = coursesData.map(course => {
                                if (course._id === courseId) {
                                        return {
                                                ...course,
                                                chapters: course.chapters.filter(chapter => chapter._id !== chapterId)
                                        };
                                }
                                return course;
                        });
                        setCoursesData(updatedCourses);
                        setShowSuccessMessage(true);
                        setNumberSuccessMessage(response.success);
                        setSuccessMessage(response.message || 'Course deleted successfully');
                } catch (error) {
                        console.error('Error deleting chapter', error);
                        setShowSuccessMessage(true);
                        setNumberSuccessMessage(false);
                        setSuccessMessage('Failed to delete the chapters');
                }
        };
        return (
                <div className="overflow-x-auto">
                        {showSuccessMessage && <Alerts Message={SuccessMessage} type={numberSuccessMessage} />}
                        <Table coursesData={coursesData} onCourseDelete={deleteCourse} onChapterDelete={deleteChapter} />
                </div>
        );
}
