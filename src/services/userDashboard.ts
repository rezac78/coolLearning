import axiosInstance from "../utils/axiosInstance";

export const UserGetData = async () => {
  try {
    const response = await axiosInstance.get("/user/dashboard");
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};
