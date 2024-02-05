import isTokenExpired from "@/utils/isTokenExpired";
import axiosInstance from "../utils/axiosInstance";
import { refreshAccessToken } from "./authService";

export const UserGetData = async (token: string | null) => {
  let accessToken = token;
  if (isTokenExpired(token)) {
    accessToken = await refreshAccessToken();
  }
  try {
    const response = await axiosInstance.get("/user/dashboard", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};

export const updateUserDetails = async (
  userData: any,
  token: string | null
) => {
  let accessToken = token;
  if (isTokenExpired(token)) {
    accessToken = await refreshAccessToken();
  }
  try {
    const response = await axiosInstance.put(`/user/update`, userData, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error);
    return { message: "Failed to update user" };
  }
};

export const purchaseCourses = async (
  courseIds: string[],
  token: string | null
) => {
  let accessToken = token;
  if (isTokenExpired(token)) {
    accessToken = await refreshAccessToken();
  }
  try {
    const response = await axiosInstance.post(
      "/user/purchase",
      { courseIds },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error purchasing courses:", error);
    throw error;
  }
};
