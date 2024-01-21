import axios from "../utils/axiosInstance";
import { Blog } from "../types/auth";

export const BlogReq = async (BlogData: Blog) => {
  try {
    const response = await axios.post("/blog", BlogData);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
export const BlogAllData = async () => {
  try {
    const response = await axios.get("/blog");
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
export const BlogDeletedData = async (itemId: string) => {
  try {
    const response = await axios.delete(`/blog/${itemId}`);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
export const BlogData = async (itemId: string | undefined) => {
  try {
    const response = await axios.get(`/blog/${itemId}`);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
export const BlogDataUpdate = async (itemId: string, BlogData: Blog) => {
  try {
    const response = await axios.put(`/blog/${itemId}`, BlogData);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};