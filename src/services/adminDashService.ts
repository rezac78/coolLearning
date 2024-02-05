import isTokenExpired from "@/utils/isTokenExpired";
import axiosInstance from "../utils/axiosInstance";
import { refreshAccessToken } from "./authService";
export const updateAdminDetails = async (
  userData: any,
  token: string | null
) => {
  let accessToken = token;
  if (isTokenExpired(token)) {
    accessToken = await refreshAccessToken();
  }
  try {
    const response = await axiosInstance.put(`/admin/update`, userData, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error);
    return { message: "Failed to update user" };
  }
};
