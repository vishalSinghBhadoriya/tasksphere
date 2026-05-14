import axiosInstance from "../api/axiosInstance";

export const getUsers = async () => {
  try {

    const response =
      await axiosInstance.get("/users");

    console.log(response);

    return response.data.users;

  } catch (error) {

    console.log(error);

    throw error;
  }
};