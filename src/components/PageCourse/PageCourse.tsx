import { Course } from '../../types/auth';
import Header from "../Header";
import useTheme from "@/hooks/useTheme";
import Footer from "../Footer/Footer";
import ImagePart from '../Shared/ImgPart/Image';
import { BookOpenIcon, ClockIcon, GlobeAltIcon, ChevronDownIcon, ChevronUpIcon, ShoppingCartIcon, UserGroupIcon, VideoCameraIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function PageCoursePart({ initialCourseData }: { initialCourseData: Course[] }, Role: string | null) {
        const { theme, toggleTheme } = useTheme();
        const [openChapterIndex, setOpenChapterIndex] = useState(null);

        const toggleChapter = (index) => {
                setOpenChapterIndex(openChapterIndex === index ? null : index);
        };
        return (
                <div className={`${theme === 'light' ? 'dark' : 'light'}`}>
                        <div className="bg-white dark:bg-black flex flex-col min-h-screen">
                                <Header Role={Role} toggleTheme={toggleTheme} currentTheme={theme} />
                                <div className="max-w-6xl mx-auto mt-5">
                                        <h2 className="text-3xl font-bold text-center mb-6">{initialCourseData.title}</h2>
                                        <div className="flex justify-center items-center mt-5">
                                                <div className="w-24 h-24 overflow-hidden rounded-full shadow-lg">
                                                        <ImagePart Src={initialCourseData.instructorPoster} width={500} height={500} className={'w-full h-full object-cover'} />
                                                </div>
                                                <div className="ml-4">
                                                        <p className="text-lg font-semibold">{initialCourseData.instructorName}</p>
                                                        <p className="text-green-500 text-xl font-bold mt-2">{"$500,000"}</p>
                                                </div>
                                        </div>
                                        <div className="flex flex-col md:flex-row mt-5">
                                                <div className="md:flex-1 w-2/6 p-4 rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
                                                        <p className="text-2xl text-green-500 font-semibold mb-2">{"$500,000"}</p>
                                                        <button className="flex items-center justify-center w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
                                                                <ShoppingCartIcon className="h-5 w-5 mr-2" />
                                                                Add to Cart
                                                        </button>
                                                        <div className="mt-6">
                                                                <div className="flex items-center mb-2">
                                                                        <UserGroupIcon className="h-5 w-5 mr-2 text-blue-500" />
                                                                        <span>Students: {"50"}</span>
                                                                </div>
                                                                <div className="flex items-center mb-2">
                                                                        <ClockIcon className="h-5 w-5 mr-2 text-red-500" />
                                                                        <span>Duration: {initialCourseData.duration}</span>
                                                                </div>
                                                                <div className="flex items-center mb-2">
                                                                        <VideoCameraIcon className="h-5 w-5 mr-2 text-green-500" />
                                                                        <span>Video Type: {"videoType"}</span>
                                                                </div>
                                                                <div className="flex items-center mb-2">
                                                                        <BookOpenIcon className="h-5 w-5 mr-2 text-purple-500" />
                                                                        <span>Prerequisite: {initialCourseData.prerequisites}</span>
                                                                </div>
                                                                <div className="flex items-center mb-2">
                                                                        <GlobeAltIcon className="h-5 w-5 mr-2 text-yellow-500" />
                                                                        <span>Language: {initialCourseData.courseLanguage}</span>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className="flex-2 w-4/6 overflow-y-auto mt-4 md:mt-0 md:ml-6">
                                                        <div className="shadow-lg rounded-lg overflow-hidden">
                                                                <ImagePart Src={initialCourseData.coursePhoto} width={600} height={600} className="w-full object-cover" />
                                                        </div>
                                                        <div className="text-gray-700 mt-4 p-4 bg-white rounded-lg shadow">
                                                                <p className="text-justify">
                                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur debitis qui blanditiis iste facilis reiciendis ratione quos hic itaque deleniti obcaecati, animi doloribus ducimus atque, doloremque, dolores nesciunt corrupti rem quod dignissimos accusantium repellendus voluptate. Laborum explicabo obcaecati neque, exercitationem repudiandae perspiciatis tempore adipisci reiciendis expedita fuga voluptatem. Explicabo vitae saepe consequatur ratione nihil quam laborum illum reiciendis, nisi tempore, cum doloribus quia placeat expedita quas alias? Architecto consequuntur expedita inventore delectus, ab accusantium autem nesciunt dignissimos quisquam optio voluptatibus odit tenetur quasi ex ratione quam laborum repudiandae rem cumque excepturi? Delectus nihil, velit magni, corporis dolore hic error aspernatur aliquid excepturi autem, qui iste consequuntur nemo officia pariatur voluptatum ut explicabo illum culpa? Ab alias dolor corporis porro atque tempora sit a, dolorum nulla omnis mollitia in eveniet. Saepe voluptatum, explicabo exercitationem et quasi maxime cumque? Porro sit, eligendi qui praesentium quos et? Earum, maiores voluptatum culpa laudantium velit ab iste adipisci sint et ex odio qui aspernatur eos animi possimus obcaecati accusamus ad repellat dolores veritatis repellendus ipsum maxime quae! Voluptas recusandae ab ipsam, nisi quidem quas reiciendis aut voluptatibus ullam impedit. Tenetur porro nostrum, in voluptate nulla repudiandae molestiae cupiditate quod repellat unde tempora blanditiis id assumenda. Iste ab quae nisi rem omnis eum consectetur quo repudiandae facilis hic aliquam doloribus dignissimos corporis, eveniet enim, magnam cupiditate ratione accusantium tempore quasi harum! Eos suscipit omnis quidem, culpa voluptates veritatis id nihil reiciendis a dolorem placeat maxime sapiente soluta quo, tenetur ducimus iure nesciunt commodi deserunt sit vel nobis, voluptas ex? Quod totam quisquam quaerat fugit at! Sequi ad temporibus quis provident ex nostrum consequuntur magni suscipit nisi facere accusamus esse, architecto amet aspernatur quos eius atque ullam laudantium possimus quasi explicabo deserunt. Ducimus accusantium architecto dolores, cum, exercitationem nisi cumque suscipit culpa iusto magnam amet quod deleniti laborum fugit facere ipsa. Blanditiis necessitatibus perferendis voluptatem ex molestiae minus repellat deserunt voluptas illo labore explicabo nulla alias inventore, quasi debitis quaerat eius hic. Iste cum enim aut consequuntur dolor asperiores nemo esse architecto ad, unde rerum eius corporis quas nisi amet optio recusandae quis distinctio harum quae? Aliquam possimus provident minus facere explicabo! Cupiditate voluptatibus ut tempore, obcaecati quidem commodi itaque quos praesentium, iure eos minus voluptate est perspiciatis quod numquam mollitia maiores eligendi natus similique sapiente fuga. Modi quos expedita consequuntur perferendis temporibus eum laborum necessitatibus soluta molestias nobis tempore eius aspernatur, provident enim totam nisi nulla maiores deleniti at omnis pariatur! Consequatur nulla beatae optio vitae voluptates recusandae! Veniam, laboriosam enim velit eligendi sapiente sit! Repudiandae, adipisci nam culpa enim deserunt cumque debitis cupiditate aperiam magni quod commodi, quia veniam aut! Animi suscipit laudantium voluptatum fugit, culpa blanditiis obcaecati quis officia, eum doloribus maxime exercitationem ipsam dolor, facilis adipisci? Amet natus dolorem at accusamus dolor quaerat! Quia laboriosam cum, hic impedit voluptatum nulla tenetur labore a excepturi earum molestiae aliquam totam eum dolore. Doloremque, eos, magnam eaque quae necessitatibus ipsum ad inventore accusamus perspiciatis ut quo itaque tempora vel. Eveniet dicta beatae molestiae sapiente fugit quisquam tempora, repellendus officiis quibusdam unde voluptas at ut cupiditate dolorum et voluptatum. Dolore doloribus ea quaerat laborum esse ducimus reiciendis est error deleniti assumenda magni unde eos a odio, dignissimos, laboriosam, quis similique ut vitae nihil id recusandae animi eveniet! At itaque dolores veritatis, alias odio harum amet rem hic dolorum. Natus, omnis in corrupti possimus voluptates quod cupiditate quam, ratione facere quaerat assumenda illum ducimus delectus dolor tenetur! Praesentium, quibusdam dignissimos sunt magnam officia quos molestiae inventore quis? Vitae, facere, atque libero voluptate ex distinctio eaque maiores deleniti cupiditate, quidem molestiae! Aperiam omnis rerum deserunt magni error odit, voluptatum cumque eveniet nostrum veniam exercitationem dolor nihil quaerat vel perferendis molestiae nemo dolorum nobis, illum fuga quod consequuntur ex sed. Fuga distinctio aperiam, expedita non, vero eligendi omnis atque, odio ipsam nostrum perspiciatis et assumenda delectus iure nobis tempore aliquid! Maiores voluptatibus illum aut dolore sequi itaque quidem tempora laborum dolor cupiditate ipsum dolorem, nulla magni molestias ea numquam sunt porro iusto omnis voluptate. Dolor excepturi quasi magnam quia quis? Placeat eaque ratione, molestiae iusto repudiandae ducimus beatae nemo alias tempora, fugit incidunt voluptas! Reiciendis repellat dolor ratione laudantium maiores quaerat illum culpa, aliquid amet, iure nemo. Exercitationem consequatur ad quis tenetur ut maiores commodi minus, accusantium aliquam quasi saepe. Pariatur molestiae iste praesentium, in accusamus eius hic corrupti voluptas. Ex natus dignissimos error dolor, ea pariatur, quae quod impedit reprehenderit modi saepe repellat sequi expedita ipsum, quasi facere enim labore minima veritatis aperiam laborum architecto. Numquam repudiandae quos unde tempora sed doloribus ullam ad natus, minima vel at soluta voluptate ipsum aut in. Voluptatibus eius perferendis non eligendi molestias nihil totam, enim similique quas vel eum sequi sed quidem qui tenetur vitae quasi sint et maiores sapiente nobis consequatur? Sequi laboriosam eligendi non nostrum asperiores ea quam ipsa aut.
                                                                </p>
                                                        </div>
                                                        <div className="mt-4 p-4 bg-white rounded-lg shadow">
                                                                <h2 className="text-xl font-semibold text-gray-700 mb-4">Seasons</h2>
                                                                {initialCourseData.chapters.map((season, index) => (
                                                                        console.log(season),
                                                                        <div key={index} className="mb-4">
                                                                                <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleChapter(index)}>
                                                                                        <h3 className="text-lg font-semibold text-blue-600">{season.name}</h3>
                                                                                        {openChapterIndex === index ? (
                                                                                                <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                                                                                        ) : (
                                                                                                <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                                                                                        )}
                                                                                </div>
                                                                                {openChapterIndex === index && (
                                                                                        <div className="mt-2 pl-4">
                                                                                                <a href={season.videoUrl} className="text-blue-500 hover:text-blue-700">Download Chapter</a>
                                                                                                <p className="mt-1 text-gray-600">{season.description}</p>
                                                                                        </div>
                                                                                )}
                                                                        </div>
                                                                ))}
                                                        </div>
                                                </div>
                                        </div>
                                </div>

                                <Footer />
                        </div>
                </div>

        )
}