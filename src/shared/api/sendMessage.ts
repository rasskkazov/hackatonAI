import { axiosInstance } from "@/shared/api/axiosInstance";

const getOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

export function fetchData<T>(
  url: string,
  options?: { params?: Record<string, string | number> },
  signal?: AbortSignal
) {
  return axiosInstance
    .get<T>(url, {
      ...getOptions,
      ...options,
      signal,
    })
    .then((res) => res.data)
    .catch((error) => {
      console.error(error.message);
      throw error;
    });
}
