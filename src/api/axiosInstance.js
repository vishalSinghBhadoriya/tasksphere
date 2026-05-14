import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const user =
      JSON.parse(localStorage.getItem("user"));

    if (user) {
      config.headers.Authorization =
        `Bearer fake-token`;
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },

  (error) => {
    console.log("Global API Error:", error);

    return Promise.reject(error);
  }
);

export default axiosInstance;