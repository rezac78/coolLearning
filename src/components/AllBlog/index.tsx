import { RecentData } from "@/Event/Event";
import Card from "../Shared/Card";

export default function AllCourse() {
        return (
                <main className="flex-grow">
                        <div className="w-full md:w-5/6 mx-auto my-40 flex flex-wrap justify-center gap-4">
                                {RecentData.map((e) => (
                                        <Card keyPart={e.id} ImagePoster={e.imgUrl} TitlePoster={e.writerName} Title={e.Title} type="Recent" />
                                ))}
                        </div>
                </main>

        )
}