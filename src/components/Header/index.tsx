import { navbar, navbarIcons } from "@/Event/Event"
import { MoonIcon, SunIcon, Bars3Icon } from "@heroicons/react/24/solid"
import { useState } from "react";
import Menu from "../Shared/HamburgerMenu/Menu";
interface HeaderProps {
        currentTheme: string;
        toggleTheme: () => void;
}
export default function Header(props: HeaderProps) {
        const [isMenuOpen, setIsMenuOpen] = useState(false);
        const toggleMenu = () => {
                setIsMenuOpen(!isMenuOpen);
        };
        return (
                <nav className="bg-light-bg-Nav dark:bg-dark-bg-Nav p-4">
                        <div className="container mx-auto flex items-center justify-between flex-wrap">
                                <div className="flex items-center flex-shrink-0 text-white mr-6">
                                        <span className="font-semibold text-xl tracking-tight">Your Logo</span>
                                </div>
                                <div className="hidden md:block">
                                        <div className="text-sm flex-grow">
                                                {navbar.map((e) => (
                                                        <a key={e.id} href={e.Link} className={`text-light-color-Font dark:text-dark-color-Font hover:text-light-color-Font-hover dark:hover:text-dark-color-Font-hover mr-4`}>{e.name}</a>
                                                ))}
                                        </div>
                                </div>
                                <div className="md:hidden">
                                        <button onClick={toggleMenu}>
                                                <Bars3Icon className="h-6 w-6 text-light-color-Font dark:text-dark-color-Font" />
                                        </button>
                                </div>
                                <div className="hidden md:block flex items-center">
                                        <button onClick={props.toggleTheme} className="mr-4">
                                                {props.currentTheme === 'dark' ? <SunIcon className="h-5 w-5 text-yellow-500" />
                                                        : <MoonIcon className="h-5 w-5 text-gray-500" />}
                                        </button>
                                        {navbarIcons.map((e) => (
                                                <button key={e.id} className="mr-4">
                                                        <e.icon className="h-5 w-5 text-light-color-Font dark:text-dark-color-Font" />
                                                </button>
                                        ))}
                                </div>
                        </div>
                        <Menu isMenuOpen={isMenuOpen} currentTheme={props.currentTheme} toggleTheme={props.toggleTheme} />
                </nav>
        )
}