import axios from "axios";

const BASE_URL = "https://dummyjson.com";

export const getUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users`);

    return response.data.users;
  } catch (error) {
    throw error;
  }
};