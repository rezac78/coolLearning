import axios from "../utils/axiosInstance";
import { Blog, CommentForm } from "../types/auth";
import isTokenExpired from "@/utils/isTokenExpired";
import { refreshAccessToken } from "./authService";

export const BlogReq = async (BlogData: Blog, token: string) => {
  let accessToken = token;
  if (isTokenExpired(token)) {
    accessToken = await refreshAccessToken();
  }
  try {
    const response = await axios.post("/blog", BlogData, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
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
export const BlogDeletedData = async (itemId: string, token: string ) => {
  let accessToken = token;
  if (isTokenExpired(token)) {
    accessToken = await refreshAccessToken();
  }
  try {
    const response = await axios.delete(`/blog/${itemId}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
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
export const BlogDataUpdate = async (
  itemId: string,
  BlogData: Blog,
  token: string
) => {
  let accessToken = token;
  if (isTokenExpired(token)) {
    accessToken = await refreshAccessToken();
  }
  try {
    const response = await axios.put(`/blog/${itemId}`, BlogData, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
export const BlogComments = async (data: CommentForm, blogId: string) => {
  try {
    const response = await axios.post(`/blog/comments/${blogId}`, { data });
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
export const getAllBlogComments = async (blogId: string) => {
  try {
    const response = await axios.get(`/blog/comments/${blogId}`);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
export const ReplayComments = async (commentData: any) => {
  try {
    const response = await axios.post(`/blog/comments/reply`, commentData);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
export const LikeBlog = async (blogId: string, token: string) => {
  let accessToken = token;
  if (isTokenExpired(token)) {
    accessToken = await refreshAccessToken();
  }
  try {
    const response = await axios.put(
      `/blog/like/${blogId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
