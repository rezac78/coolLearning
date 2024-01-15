import * as Yup from "yup";

export const registrationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"),
  repeatPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const courseSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  duration: Yup.string().required("Duration is required"),
  courseType: Yup.string().required("Course type is required"),
  prerequisites: Yup.string().required("Prerequisites are required"),
  courseLanguage: Yup.string().required("Course language is required"),
  poster: Yup
    .string()
    .url("Enter a valid URL")
    .required("Poster URL is required"),
  description: Yup.string().required("Course description is required"),
  coursePhoto: Yup
    .string()
    .url("Enter a valid URL")
    .required("Course photo URL is required"),
  instructorName: Yup.string().required("Instructor's name is required"),
  instructorScope: Yup
    .string()
    .required("Instructor's activity area is required"),
  chapters: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("Chapter name is required"),
      description: Yup.string().required("Chapter description is required"),
      videoUrl: Yup
        .string()
        .url("Enter a valid URL")
        .required("Video URL is required"),
    })
  ),
});
