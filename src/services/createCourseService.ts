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
