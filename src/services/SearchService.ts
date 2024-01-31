import axiosInstance from "../utils/axiosInstance";

export const SearchCourse = async (searchTerm: any) => {
  try {
    const response = await axiosInstance.get(`/search?term=${encodeURIComponent(searchTerm)}`);
    return response.data;
  } catch (error) {
    console.error("Error search:", error);
    return { message: "Failed to search" };
  }
};