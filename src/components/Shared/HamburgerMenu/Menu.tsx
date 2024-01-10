import { navbar, navbarIcons } from "@/Event/Event"
import { MoonIcon, SunIcon} from "@heroicons/react/24/solid"
interface HeaderProps {
        isMenuOpen: boolean;
        currentTheme: string;
        toggleTheme: () => void;
}
export default function Menu(props: HeaderProps) {
        return (
                <>
                        {props.isMenuOpen && (
                                <>
                                        <div className="">
                                                <div className="text-base">
                                                        {navbar.map((e) => (
                                                                <a key={e.id} href={e.Link} className={`text-light-color-Font flex justify-center dark:text-dark-color-Font hover:text-light-color-Font-hover dark:hover:text-dark-color-Font-hover m-4`}>{e.name}</a>
                                                        ))}
                                                </div>
                                        </div>
                                        <div className="flex justify-center mt-5">
                                                <button onClick={props.toggleTheme} className="mr-4">
                                                        {props.currentTheme === 'dark' ? <SunIcon className="h-5 w-5 text-yellow-500" />
                                                                : <MoonIcon className="h-6 w-6 text-gray-500" />}
                                                </button>
                                                {navbarIcons.map((e) => (
                                                        <button key={e.id} className="mr-4">
                                                                <e.icon className="h-6 w-6 text-light-color-Font dark:text-dark-color-Font" />
                                                        </button>
                                                ))}
                                        </div>
                                </>
                        )}
                </>

        )
}
