import aspida from "@aspida/axios";
import api from "./aspida/$api";
import axios from "axios";

const axiosInstance = () => {
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  if (!baseURL) {
    throw new Error("env: VITE_API_BASE_URL must be set.");
  }
  return axios.create({
    baseURL,
  });
};

export const apiClient = api(aspida(axiosInstance()));
