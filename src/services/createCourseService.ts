import axios from "../utils/axiosInstance";
import { Course } from "../types/auth";

export const CourseReq = async (CourseData: Course, getToken: any) => {
  try {
    const response = await axios.post("/courses", CourseData, {
      headers: {
        Authorization: `Bearer ${getToken}`,
      },
    });
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
