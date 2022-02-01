import aspida from "@aspida/axios";
import api from "./aspida/$api";
import axios from "axios";

const axiosInstance = axios.create({ baseURL: "http://localhost:8080" });

export const apiClient = api(aspida(axiosInstance));
