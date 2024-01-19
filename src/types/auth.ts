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
  coursePrice: string;
  peopleNumber: string;
  prerequisites: string;
  courseLanguage: string;
  instructorPoster: string;
  description: string;
  longDescription: string;
  coursePhoto: string;
  instructorName: string;
  instructorScope: string;
  chapters: Chapter[];
}