import  Router  from 'next/router';
import Button from '../Shared/Button/Button';
import ImagePart from '../Shared/ImgPart/Image';
export default function Introduction() {
        return (
                <div className="container mx-auto w-11/12 md:w-5/6 flex flex-col md:flex-row items-center my-52">
                        <div className="flex-1 mb-4 md:mb-0">
                                <ImagePart Src="/feature.svg" width={500} height={400} className="rounded-lg shadow-lg" />
                        </div>
                        <div className="flex-1 text-center sm:text-left mt-10 md:mt-0 px-0 md:px-6">
                                <h2 className="text-3xl font-bold mb-2 text-light-color-Font dark:text-dark-color-Font">Cool Learning</h2>
                                <p className="text-base mb-4 text-light-color-Font dark:text-dark-color-Font">
                                        Our goal in establishing Cool Learning is that anyone with any background and knowledge can easily enter the beautiful and lucrative world of programming.
                                </p>
                                <Button Click={() => Router.push(`/courses`)} Type="button" Title="See All Courses" className="bg-bg-button hover:bg-bg-button-hover text-dark-color-Font font-bold py-2 px-4 rounded" />
                        </div>
                </div>

        )
}