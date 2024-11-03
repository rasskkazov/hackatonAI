import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://65646c94ceac41c0761e28ba.mockapi.io",
  headers: {
    "Content-Type": "application/json",
  },
});
