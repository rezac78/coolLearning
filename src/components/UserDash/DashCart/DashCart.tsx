import React from 'react';
import Card from '@/components/Shared/Card';
interface DashCartProps {
        initialData: any;
}
export default function DashCart({ initialData }: DashCartProps) {
        return (
                <main className="flex-grow flex flex-col items-center">
                        <h1 className="text-2xl font-bold text-center mt-10 mb-5">Your Purchased Courses</h1>
                        <div className="w-full h-min md:w-5/6 mx-auto my-10 flex flex-wrap justify-center gap-4">
                                {initialData && initialData.length > 0 ? (
                                        initialData.map((e:any) => (
                                                <Card
                                                        type="courses"
                                                        LinkId={e._id}
                                                        key={e._id}
                                                        user={e.peopleNumber}
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
                                        <p className="text-center text-xl mt-5">You have not purchased any courses yet.</p>
                                )}
                        </div>
                </main>
        );
};
