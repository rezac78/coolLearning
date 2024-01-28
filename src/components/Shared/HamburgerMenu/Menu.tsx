import { navbar, navbarIcons } from "@/Event/Event"
import useSearch from "@/hooks/useSearch";
import { MoonIcon, ShoppingCartIcon, SunIcon, UserIcon } from "@heroicons/react/24/solid"
import Links from "../Link/Link";
import Button from "../Button/Button";
import { useShoppingCart } from "@/context/ShoppingCartContext";
interface HeaderProps {
        isMenuOpen: boolean;
        currentTheme: string;
        toggleTheme: () => void;
        Role: string | undefined;
}
export default function Menu(props: HeaderProps) {
        const { showSearchInput, toggleSearchInput } = useSearch();
        const { cartItems } = useShoppingCart();
        return (
                <>
                        {props.isMenuOpen && (
                                <>
                                        <div className="">
                                                <div className="text-base">
                                                        {navbar.map((e) => (
                                                                <Links IdName={e.name} type="icon" Href={e.Link} key={e.id} className="text-light-color-Font flex justify-center dark:text-dark-color-Font hover:text-light-color-Font-hover dark:hover:text-dark-color-Font-hover m-4">
                                                                        {e.name}
                                                                </Links>
                                                        ))}
                                                </div>
                                        </div>
                                        <div className="flex justify-center mt-5">
                                                <Button IdName="Team" Type="child" Click={props.toggleTheme} className="mr-4">
                                                        {props.currentTheme === 'dark' ? <SunIcon className="h-5 w-5 text-yellow-500" />
                                                                : <MoonIcon className="h-6 w-6 text-gray-500" />}
                                                </Button>
                                                {navbarIcons.map((e) => {
                                                        return (
                                                                e.name === 'Search' ? (
                                                                        <Button Type="child" IdName={e.name} key={e.id} className="mr-4" Click={e.name === 'Search' ? toggleSearchInput : undefined}>
                                                                                <e.icon className="h-6 w-6 text-light-color-Font dark:text-dark-color-Font" />
                                                                        </Button>
                                                                ) : null
                                                        );
                                                })}
                                                <Links
                                                        type="icon"
                                                        Href={props.Role === 'admin' ? '/admin/dashboard' : props.Role === 'user' ? '/user/dashboard' : '/login'}
                                                        key={'Search'}
                                                        className="mr-4"
                                                        IdName={'Search'}>
                                                        <UserIcon className="h-6 w-6 text-light-color-Font dark:text-dark-color-Font" />
                                                </Links>
                                                <Links
                                                        type="icon"
                                                        Href={'/Cart'}
                                                        key={'Shopping'}
                                                        className="mr-4"
                                                        IdName={'Shopping'}>
                                                        <ShoppingCartIcon className="h-6 w-6 text-light-color-Font dark:text-dark-color-Font" />
                                                        {cartItems.length > 0 && (
                                                                <span className="-mt-10 bg-dark-red dark:bg-light-red text-dark-color-Font rounded-full text-xs w-5 h-5 flex items-center justify-center">
                                                                        {cartItems.length}
                                                                </span>
                                                        )}
                                                </Links>
                                                {showSearchInput && (
                                                        <input
                                                                type="text"
                                                                className="absolute top-5 z-20 mt-2 w-3/6 m-auto rounded-md border border-gray-300 shadow-sm p-2 transition-all duration-300 ease-in-out"
                                                                autoFocus
                                                        />
                                                )}
                                        </div>
                                </>
                        )}
                </>
        )
}