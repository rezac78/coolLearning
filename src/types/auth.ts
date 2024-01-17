export interface RegistrationData {
  email: string;
  familyName: string;
  name: string;
  password: string;
  repeatPassword: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface Chapter {
  _id: string;
  name: string;
  description: string;
  videoUrl: string;
}

export interface Course {
  _id: string;
  title: string;
  duration: string;
  courseType: string;
  prerequisites: string;
  courseLanguage: string;
  poster: string;
  description: string;
  coursePhoto: string;
  instructorName: string;
  instructorScope: string;
  chapters: Chapter[];
}