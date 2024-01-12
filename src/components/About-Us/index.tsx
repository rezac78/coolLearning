import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ImagePart from '../Shared/ImgPart/Image';
export default function About() {
        useEffect(() => {
                AOS.init({
                        duration: 1000,
                });
        }, []);
        return (
                <div className="container mx-auto px-4 py-8 overflow-x-hidden">
                        <div className="flex flex-wrap items-center">
                                <div className="w-full md:w-1/2" data-aos="fade-right">
                                        <h2 className="text-light-color-Font dark:text-dark-color-Font text-2xl font-bold mb-2">Reza Dalvand</h2>
                                        <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, ratione inventore! Dolorem temporibus quia laboriosam corrupti minus? Deleniti consectetur rerum laboriosam eligendi dolore, adipisci maxime voluptatum obcaecati ducimus sapiente, eius doloremque qui explicabo quo, est aperiam corporis! Quod illo tempore maiores dolorum optio praesentium debitis repudiandae, a ab sed expedita iusto. Deserunt autem consectetur aspernatur vel eum incidunt. Accusantium at laboriosam exercitationem nostrum nisi? Nesciunt impedit nihil dicta eligendi ipsum, ex sit sequi quod ducimus possimus excepturi repellat aliquid officiis quo expedita pariatur eaque tenetur laboriosam praesentium. Vero architecto a voluptate perspiciatis eum consectetur, deserunt modi! Exercitationem dolorum dolores, molestias minus maxime ut totam nisi corrupti facere laudantium error, quia vitae deserunt illum a dolor ratione voluptatibus, amet perferendis odio!</p>
                                </div>
                                <div className="w-full md:w-1/2 text-center" data-aos="fade-left">
                                        <ImagePart Src="/reza1.jpg" className="inline-block h-80 w-80 object-cover rounded-full shadow-lg" width={500} height={500} />
                                </div>
                        </div>
                        <div className="flex flex-wrap items-center mt-8">
                                <div className="w-full md:w-1/2 text-center" data-aos="fade-right">
                                        <ImagePart Src="/reza2.jpg" className="inline-block h-80 w-80 object-cover rounded-full shadow-lg" width={500} height={500} />
                                </div>
                                <div className="w-full md:w-1/2" data-aos="fade-left">
                                        <h2 className="text-2xl font-bold mb-2">Reza Mehrzad</h2>
                                        <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, autem necessitatibus. Dolor mollitia sint illo deserunt soluta nulla unde. Reiciendis totam ratione perspiciatis est saepe, amet architecto ex commodi ipsum, ullam voluptatibus vel, dicta quod nostrum eos at nam delectus mollitia non nobis. Accusamus dolor tempore est reprehenderit veniam sint, vel voluptas ratione, dolorum laudantium officiis explicabo repudiandae ab! Iusto minus dolorem, esse rem culpa voluptate sed tempora beatae eligendi fuga, quas incidunt eaque non nisi tenetur. Repellat, animi provident iusto nulla aperiam illum optio quas molestiae repellendus error. Numquam labore quaerat facere itaque, aut, obcaecati asperiores delectus veniam nam eligendi, magni omnis praesentium sapiente libero quam quasi animi quos voluptatibus sint totam! Voluptate, sint doloribus! Error adipisci dolores aspernatur.</p>
                                </div>
                        </div>
                </div>

        )
}