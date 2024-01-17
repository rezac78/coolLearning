import { navbar, navbarIcons } from "@/Event/Event"
import { MoonIcon, SunIcon, Bars3Icon } from "@heroicons/react/24/solid"
import { useState } from "react";
import Menu from "../Shared/HamburgerMenu/Menu";
import ImagePart from "../Shared/ImgPart/Image";
import useSearch from "@/hooks/useSearch";
import Links from "../Shared/Link/Link";
import Button from "../Shared/Button/Button";
interface HeaderProps {
        currentTheme: string;
        toggleTheme: () => void;
        Role: string | null;
}
export default function Header(props: HeaderProps) {
        const [isMenuOpen, setIsMenuOpen] = useState(false);
        const toggleMenu = () => {
                setIsMenuOpen(!isMenuOpen);
        };
        const { showSearchInput, toggleSearchInput } = useSearch();
        return (
                <nav className="bg-light-bg-Nav dark:bg-dark-bg-Nav p-4">
                        <div className="mx-auto flex items-center justify-between flex-wrap">
                                <div className="flex items-center flex-shrink-0 text-white mr-6">
                                        <ImagePart Src="/Logo1.png" className="w-full" width={60} height={80} />
                                </div>
                                <div className="hidden md:block">
                                        <div className="text-base flex-grow">
                                                {navbar.map((e) => (
                                                        <Links type="icon" Href={e.Link} key={e.id} className="text-light-color-Font dark:text-dark-color-Font hover:text-light-color-Font-hover dark:hover:text-dark-color-Font-hover mr-4">
                                                                {e.name}
                                                        </Links>
                                                ))}
                                        </div>
                                </div>
                                <div className="md:hidden">
                                        <Button Type="child" aria-label="Bars3Icon" Click={toggleMenu}>
                                                <Bars3Icon className="h-7 w-7 text-light-color-Font dark:text-dark-color-Font" />
                                        </Button>
                                </div>
                                <div className="relative hidden md:flex items-center">
                                        <Button Type="child" aria-label="Team" Click={props.toggleTheme} className="mr-4">
                                                {props.currentTheme === 'dark' ? <SunIcon className="h-5 w-5 text-yellow-500" />
                                                        : <MoonIcon className="h-6 w-6 text-gray-500" />}
                                        </Button>
                                        {navbarIcons.map((e) => {
                                                return (
                                                        e.name === 'Search' ? (
                                                                <Button Type="child" aria-label={e.name} key={e.id} className="mr-4" Click={e.name === 'Search' ? toggleSearchInput : undefined}>
                                                                        <e.icon className="h-6 w-6 text-light-color-Font dark:text-dark-color-Font" />
                                                                </Button>
                                                        ) : (
                                                                <>
                                                                        <Links type="icon" Href={props.Role === 'admin' ? '/admin/dashboard' : props.Role === 'user' ? '/user/dashboard' : e.Link} key={e.id} className="mr-4" aria-label={e.name}>
                                                                                <e.icon className="h-6 w-6 text-light-color-Font dark:text-dark-color-Font" />
                                                                        </Links>
                                                                </>
                                                        )
                                                );
                                        })}
                                        {showSearchInput && (
                                                <input
                                                        type="text"
                                                        className="absolute -top-4 z-10 right-56 mt-2 w-full rounded-md border border-gray-300 shadow-sm p-2 transition-all duration-300 ease-in-out"
                                                        autoFocus
                                                />
                                        )}
                                </div>
                        </div>
                        <Menu isMenuOpen={isMenuOpen} currentTheme={props.currentTheme} toggleTheme={props.toggleTheme} />
                </nav>
        )
}