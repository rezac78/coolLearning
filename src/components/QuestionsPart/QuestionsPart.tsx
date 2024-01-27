import { Questions } from '@/Event/Event';
import ImagePart from '../Shared/ImgPart/Image';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function QuestionsPart() {
        useEffect(() => {
                AOS.init({
                        duration: 1000,
                });
        }, []);
        return (
                <>
                        {Questions.map((e) => (
                                <div key={e.id} className="container mx-auto w-11/12 md:w-5/6 flex flex-col md:flex-row items-center my-32" style={{ "direction": `${e.Direction}` }}>
                                        <div className="flex-1 mb-4 md:mb-0" data-aos="fade-down">
                                                <ImagePart Src={e.imgUrl} width={500} height={400} className="rounded-lg shadow-lg" />
                                        </div>
                                        <div className="flex-1 text-center mt-10 md:mt-0 px-0 md:px-6" data-aos="fade-up">
                                                <h2 className="text-1xl sm:text-3xl font-bold mb-2 text-light-color-Font dark:text-dark-color-Font">{e.Title}</h2>
                                                <p className="text-xs sm:text-base sm:text-left my-4 text-light-color-Font dark:text-dark-color-Font">{e.Paragraph}</p>
                                        </div>
                                </div>

                        ))}
                </>
        )
}