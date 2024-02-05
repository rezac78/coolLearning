import axios from "../utils/axiosInstance";
import { Course, CommentForm } from "../types/auth";
import isTokenExpired from "@/utils/isTokenExpired";
import { refreshAccessToken } from "./authService";
export const CourseReq = async (CourseData: Course, token: string | null) => {
  let accessToken = token;
  if (isTokenExpired(token)) {
    accessToken = await refreshAccessToken();
  }
  try {
    const response = await axios.post("/courses", CourseData, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
export const CourseAllData = async () => {
  try {
    const response = await axios.get("/courses");
    return response.data;
  } catch (error: any) {
    return error.response;
  }
};
export const CourseDeletedData = async (
  itemId: string,
  token: string | null
) => {
  let accessToken = token;
  if (isTokenExpired(token)) {
    accessToken = await refreshAccessToken();
  }
  try {
    const response = await axios.delete(`/courses/${itemId}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
export const CourseDeletedChapter = async (
  itemId: string,
  itemId2: string,
  token: string | null
) => {
  let accessToken = token;
  if (isTokenExpired(token)) {
    accessToken = await refreshAccessToken();
  }
  try {
    const response = await axios.delete(
      `/courses/${itemId}/chapter/${itemId2}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
export const CourseData = async (
  itemId: string | undefined,
  token: string | null
) => {
  let accessToken = token;
  if (isTokenExpired(token)) {
    accessToken = await refreshAccessToken();
  }
  try {
    const response = await axios.get(`/courses/${itemId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
export const CourseDataUpdate = async (
  itemId: string,
  CourseData: Course,
  token: string | null
) => {
  let accessToken = token;
  if (isTokenExpired(token)) {
    accessToken = await refreshAccessToken();
  }
  try {
    const response = await axios.put(`/courses/${itemId}`, CourseData, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
export const CourseComments = async (data: CommentForm, courseId: string) => {
  try {
    const response = await axios.post(`/courses/comments/${courseId}`, {
      data,
    });
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
export const getAllCourseComments = async (courseId: string) => {
  try {
    const response = await axios.get(`/courses/comments/${courseId}`);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
export const ReplayComments = async (commentData: any) => {
  try {
    const response = await axios.post(`/courses/comments/reply`, commentData);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
