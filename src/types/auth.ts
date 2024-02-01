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
export interface CommentForm {
  parentId: string;
  name: string;
  comment: string;
}

export interface Course {
  _id: string;
  title: string;
  duration: string;
  courseType: string;
  coursePrice: string;
  purchaseCount: number;
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
export interface CartItem extends Course {
  quantity: number;
}

export interface Blog {
  _id: string;
  subject: string;
  tags: string;
  description: string;
  creatorName: string;
  cardPhoto: string;
  creatorPhoto: string;
  creatorScope: string;
  commentsCount:number;
  likes:any;
  creationDate: Date;
}
export interface Token {
  exp: number;
  iat: number;
  id: string;
  role: string;
}