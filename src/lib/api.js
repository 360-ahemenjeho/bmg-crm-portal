import { useAuthStore } from "@/store/auth";
import axios from "axios";

export const api = axios.create({
  baseURL: "https://bmg-crm.onrender.com/V1/api",
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const { token } = useAuthStore.getState();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;

    if (error?.code === "ERR_NETWORK") {
      // toast.info("Connection error, please try again!");
      return Promise.reject(error);
    }

    if (status === 401) {
      // toast.error("Session expired. Please login again.");

      const { clearAuth } = useAuthStore.getState();
      clearAuth();

      if (window.location.pathname !== "/login") {
        window.location.replace("/login");
      }
    }

    if (status === 403) {
      const message = error?.response?.data?.message || "Access denied";
      // toast.error(message);
    }

    return Promise.reject(error);
  },
);
