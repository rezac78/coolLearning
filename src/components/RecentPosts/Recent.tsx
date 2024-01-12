import { RecentData } from '@/Event/Event';
import Card from '../Shared/Card';
export default function Recent() {
        return (
                <>
                        <div className="w-11/12	md:w-3/6 mx-auto text-center py-6">
                                <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-light-color-Font dark:text-dark-color-Font">Recent posts</h1>
                                <p className="text-xs sm:text-base mb-6 text-light-color-Font dark:text-dark-color-Font">
                                        Our goal in establishing Cool Learning is that anyone with any background and knowledge can easily enter the beautiful and lucrative world of programming.
                                </p>
                        </div>
                        <div className="w-full md:w-5/6 mx-auto mb-5 flex flex-wrap justify-center gap-4">
                                {RecentData.map((e) => (
                                        <Card keyPart={e.id} ImagePoster={e.imgUrl} TitlePoster={e.writerName} Title={e.Title} type="Recent" />
                                ))}
                        </div>
                </>
        )
}