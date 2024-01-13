import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
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
  Link: string;
}

export interface QuestionsSchema {
  id: number;
  Title: string;
  Paragraph: string;
  Direction: "ltr" | "rtl";
  imgUrl: string;
}

export interface RecentPosts {
  id: number;
  writerName: string;
  imgUrl: string;
  Title: string;
}

export interface InputRegister {
  id: number;
  IdName: string;
  LabelName: string;
  type: string;
}

export interface InputLogin {
  id: number;
  IdName: string;
  LabelName: string;
  type: string;
}

export const navbar: Navbar[] = [
  { id: 1, name: "Home", Link: "/" },
  { id: 2, name: "Courses", Link: "/courses" },
  { id: 3, name: "Blog", Link: "/blog" },
  { id: 4, name: "About Us", Link: "/about" },
];

export const navbarIcons: NavbarIcons[] = [
  { id: 1, name: "Search", icon: MagnifyingGlassIcon, Link: "#" },
  { id: 2, name: "Shopping", icon: ShoppingCartIcon, Link: "#" },
  { id: 3, name: "Auth", icon: ArrowLeftEndOnRectangleIcon, Link: "/register" },
];

export const Questions: QuestionsSchema[] = [
  {
    id: 1,
    Title: "?Can anyone learn programming",
    Paragraph:
      "In a word, yes. Anyone of any age and with any background can learn programming, but it depends on one important factor. Some courses are based on the assumption that you have already worked with a programming language, or that you know a bit of mathematics. The best course is one that includes all these prerequisites in its training. This way, everyone can benefit from the course, and even those who know some of the basics can review and utilize the materials. All the courses and trainings that we have on the Coding Yar website are based on this important principle of teaching.",
    Direction: "rtl",
    imgUrl: "/E-Learning.gif",
  },
  {
    id: 2,
    Title: "How do I start programming?",
    Paragraph:
      "First and foremost, you need to have access to good education and courses. Because if you undergo the wrong training, then you'll find yourself not reaching the desired results after spending a lot of time. Secondly, it's essential to have access to the instructor who is teaching. If the person teaching is not accessible, then how are you going to ask your questions? And the third and most important point is that you must do proper exercises and projects, or else you'll forget everything you've learned. This also helps you to be thoroughly prepared for building your resume and to use those suitable projects.",
    Direction: "ltr",
    imgUrl: "/Online-learning.gif",
  },
];

export const RecentData: RecentPosts[] = [
  {
    id: 1,
    writerName: "hadi Sabzevari",
    imgUrl: "/success.png",
    Title: "Choosing the best programming field",
  },
  {
    id: 2,
    writerName: "hadi Sabzevari",
    imgUrl: "/success.png",
    Title: "Choosing the best programming field",
  },
  {
    id: 3,
    writerName: "hadi Sabzevari",
    imgUrl: "/success.png",
    Title: "Choosing the best programming field",
  },
];

export const InputRegister: InputRegister[] = [
  {
    id: 1,
    IdName: "username",
    LabelName: "Username",
    type: "text",
  },
  {
    id: 2,
    IdName: "email",
    LabelName: "Email",
    type: "email",
  },
  {
    id: 3,
    IdName: "password",
    LabelName: "Password",
    type: "password",
  },
  {
    id: 4,
    IdName: "repeatPassword",
    LabelName: "Repeat Password",
    type: "password",
  },
];

export const InputLogin: InputLogin[] = [
  {
    id: 1,
    IdName: "email",
    LabelName: "Email",
    type: "email",
  },
  {
    id: 2,
    IdName: "password",
    LabelName: "Password",
    type: "password",
  },
];
