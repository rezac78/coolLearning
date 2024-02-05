import React, { useState } from 'react';
import Table from '@/components/Shared/Table/Table';
import { Blog } from '../../../types/auth';
import Alerts from '@/components/Shared/Alert/Alert';
import { BlogDeletedData } from '@/services/createBlogService';
interface DashboardProps {
        initialCoursesData: Blog[];
}
export default function DashboardBlog({ initialCoursesData }: DashboardProps) {
        const [coursesData, setCoursesData] = useState<Blog[]>(initialCoursesData);
        const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
        const [numberSuccessMessage, setNumberSuccessMessage] = useState<boolean>();
        const [SuccessMessage, setSuccessMessage] = useState<string>();
        const token = localStorage.getItem("accessToken");
        const deleteBlog = async (courseId: string) => {
                try {
                        const response = await BlogDeletedData(courseId, token);
                        setCoursesData(coursesData.filter(course => course._id !== courseId));
                        setShowSuccessMessage(true);
                        setNumberSuccessMessage(response.success);
                        setSuccessMessage(response.message || 'Blog deleted successfully');
                } catch (error) {
                        console.error('Error deleting Blog', error);
                        setShowSuccessMessage(true);
                        setNumberSuccessMessage(false);
                        setSuccessMessage('Failed to delete the Blog');
                }
                setTimeout(() => setShowSuccessMessage(false), 5000);
        };
        return (
                <div className="overflow-x-auto">
                        {showSuccessMessage && <Alerts Message={SuccessMessage} type={numberSuccessMessage} />}
                        <Table type="blog" data={coursesData} onItemDelete={deleteBlog} />
                </div>
        );
}