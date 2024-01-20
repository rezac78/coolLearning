import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
  UserGroupIcon,
  ClockIcon,
  VideoCameraIcon,
  BookOpenIcon,
  GlobeAltIcon,
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
  PeopleCount: string;
  CourseHours: string;
  SeasonsCount: string;
  Description: string;
  Tag: string;
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

export interface Navigation {
  id: number;
  name: string;
  href: string;
}

export interface InputForm {
  id: number;
  IdName: string;
  LabelName: string;
  type: string;
}
export interface InputFormChapter {
  id: number;
  IdName: string;
  LabelName: string;
  type: string;
}
export interface TableHead {
  id: number;
  Title: string;
}
export interface LeftSideCourse {
  id: number;
  Label: string;
  color: string;
  idPart: string;
  icon: any;
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
  { id: 3, name: "Auth", icon: UserIcon, Link: "/login" },
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
    Description:
      "Comprehensive learning of the Python programming language along with free course updates",
    PeopleCount: "700",
    CourseHours: "500",
    SeasonsCount: "52",
    Tag: "programing",
  },
  {
    id: 2,
    writerName: "hadi Sabzevari",
    imgUrl: "/success.png",
    Title: "Choosing the best programming field",
    Description:
      "Comprehensive learning of the Python programming language along with free course updates",
    PeopleCount: "700",
    CourseHours: "500",
    SeasonsCount: "52",
    Tag: "programing",
  },
  {
    id: 3,
    writerName: "hadi Sabzevari",
    imgUrl: "/success.png",
    Title: "Choosing the best programming field",
    Description:
      "Comprehensive learning of the Python programming language along with free course updates",
    PeopleCount: "700",
    CourseHours: "500",
    SeasonsCount: "52",
    Tag: "programing",
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

export const navigation: Navigation[] = [
  { id: 1, name: "Dashboard", href: "/admin/dashboard" },
  { id: 2, name: "Course", href: "/admin/course" },
  { id: 3, name: "Blog", href: "/admin/blog" },
];

export const InputForm: InputForm[] = [
  {
    id: 1,
    IdName: "title",
    LabelName: "Title",
    type: "text",
  },
  {
    id: 2,
    IdName: "duration",
    LabelName: "Duration",
    type: "text",
  },
  {
    id: 3,
    IdName: "courseType",
    LabelName: "Course Type",
    type: "text",
  },
  {
    id: 4,
    IdName: "coursePrice",
    LabelName: "Course Price",
    type: "text",
  },
  {
    id: 5,
    IdName: "peopleNumber",
    LabelName: "People Number",
    type: "text",
  },
  {
    id: 6,
    IdName: "prerequisites",
    LabelName: "Prerequisites",
    type: "text",
  },
  {
    id: 7,
    IdName: "courseLanguage",
    LabelName: "Course Language",
    type: "text",
  },
  {
    id: 8,
    IdName: "coursePhoto",
    LabelName: "Poster URL",
    type: "url",
  },
  {
    id: 9,
    IdName: "description",
    LabelName: "Course Description",
    type: "text",
  },
  {
    id: 10,
    IdName: "longDescription",
    LabelName: "Long Description",
    type: "text",
  },
  {
    id: 11,
    IdName: "instructorPoster",
    LabelName: "Instructor Poster URL",
    type: "url",
  },
  {
    id: 12,
    IdName: "instructorName",
    LabelName: "Instructor's Name",
    type: "text",
  },
  {
    id: 13,
    IdName: "instructorScope",
    LabelName: "Instructor's Scope",
    type: "text",
  },
];

export const InputFormChapter: InputFormChapter[] = [
  {
    id: 1,
    IdName: "name",
    LabelName: "Chapter Name",
    type: "text",
  },
  {
    id: 2,
    IdName: "description",
    LabelName: "Chapter Description",
    type: "text",
  },
  {
    id: 3,
    IdName: "videoUrl",
    LabelName: "Video URL",
    type: "text",
  },
];

export const TableHead: TableHead[] = [
  {
    id: 1,
    Title: "Title",
  },
  {
    id: 2,
    Title: "Duration",
  },
  {
    id: 3,
    Title: "Course Type",
  },
  {
    id: 4,
    Title: "Course Price",
  },
  {
    id: 5,
    Title: "People Number",
  },
  {
    id: 6,
    Title: "Prerequisites",
  },
  {
    id: 7,
    Title: "Course Language",
  },
  {
    id: 8,
    Title: "Poster",
  },
  {
    id: 9,
    Title: "Description",
  },
  {
    id: 10,
    Title: "Long Description",
  },
  {
    id: 11,
    Title: "Course Photo",
  },
  {
    id: 12,
    Title: "Instructor Name",
  },
  {
    id: 13,
    Title: "Instructor Scope",
  },
  {
    id: 14,
    Title: "Actions",
  },
];

export const TableHeadChapter: TableHead[] = [
  {
    id: 1,
    Title: "Name",
  },
  {
    id: 2,
    Title: "Description",
  },
  {
    id: 3,
    Title: "Video URL",
  },
  {
    id: 4,
    Title: "Actions",
  },
];

export const LeftSideCourse: LeftSideCourse[] = [
  {
    id: 1,
    Label: "Students:",
    color: "text-blue-500",
    icon: UserGroupIcon,
    idPart: "peopleNumber",
  },
  {
    id: 2,
    Label: "Chapters:",
    color: "text-green-500",
    icon: VideoCameraIcon,
    idPart: "length",
  },
  {
    id: 3,
    Label: "Duration:",
    color: "text-red-500",
    icon: ClockIcon,
    idPart: "duration",
  },
  {
    id: 4,
    Label: "Prerequisite:",
    color: "text-purple-500",
    icon: BookOpenIcon,
    idPart: "prerequisites",
  },
  {
    id: 5,
    Label: "Language:",
    color: "text-yellow-500",
    icon: GlobeAltIcon,
    idPart: "courseLanguage",
  },
];
