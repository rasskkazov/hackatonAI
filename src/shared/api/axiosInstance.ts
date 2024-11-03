import axios from "axios";
import { BACKEND_URL } from "./variables";

export const axiosInstance = axios.create({
  // baseURL: "https://65646c94ceac41c0761e28ba.mockapi.io",
  baseURL: BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
