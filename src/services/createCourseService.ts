import axios from "../utils/axiosInstance";
import { Course } from "../types/auth";

export const CourseReq = async (CourseData: Course) => {
  try {
    const response = await axios.post("/courses", CourseData);
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
    return error.response.data;
  }
};

export const CourseDeletedData = async (itemId: string) => {
  try {
    const response = await axios.delete(`/courses/${itemId}`);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const CourseDeletedChapter = async (itemId: string, itemId2: string) => {
  try {
    const response = await axios.delete(`/courses/${itemId}/chapter/${itemId2}`);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
