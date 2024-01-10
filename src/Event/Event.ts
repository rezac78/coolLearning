import {
  MagnifyingGlassIcon,
  SunIcon,
  ShoppingCartIcon,
  MoonIcon,
  ArrowLeftEndOnRectangleIcon,
} from "@heroicons/react/24/solid";

export interface Navbar {
  id: number;
  Link: string;
  name: string;
}

export interface NavbarIcons {
  id: number;
  name: string;
  icon: any;
}

export const navbar: Navbar[] = [
  { id: 1, name: "Home", Link: "#home" },
  { id: 2, name: "Courses", Link: "#courses" },
  { id: 3, name: "Blog", Link: "#blog" },
  { id: 4, name: "FAQ", Link: "#faq" },
  { id: 5, name: "About Us", Link: "#about" },
  { id: 6, name: "Contact Us", Link: "#contact" },
];

export const navbarIcons: NavbarIcons[] = [
  { id: 1, name: "Search", icon: MagnifyingGlassIcon },
  { id: 2, name: "Shopping", icon: ShoppingCartIcon },
  { id: 3, name: "Auth", icon: ArrowLeftEndOnRectangleIcon },
];
