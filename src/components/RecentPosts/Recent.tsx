import { RecentData } from '@/Event/Event';
import ImagePart from '../Shared/ImgPart/Image';
import Button from '../Shared/Button/Button';
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
                                        <div key={e.id} className="max-w-72 sm:max-w-80 group/item transition duration-700 rounded overflow-hidden shadow-lg hover:-translate-y-6">
                                                <div className="relative">
                                                        <ImagePart className="w-full transition duration-700 hover:brightness-[.3]" Src={e.imgUrl} width={500} height={300} />
                                                        <span className="absolute top-5 left-5 text-light-color-Font px-2 py-1 text-sm group/edit invisible group-hover/item:visible">{e.writerName}</span>
                                                </div>
                                                <div className="px-1 py-4">
                                                        <div className="font-bold text-sm sm:text-base text-light-color-Font dark:text-dark-color-Font mb-2">{e.Title}</div>
                                                        <Button className="px-1 text-right pt-2 pb-2 text-light-color-Font dark:text-dark-color-Font" Title="More" />
                                                </div>
                                        </div>
                                ))}
                        </div>
                </>
        )
}