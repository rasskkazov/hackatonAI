import { axiosInstance } from "@/shared/api/axiosInstance";

export type TResponse = {
  data: string;
};

const getOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

export const getResponse = (
  options: {
    requestMessage: string;
  },
  signal?: AbortSignal
) => {
  return axiosInstance
    .get<TResponse[]>("ai", {
      ...getOptions,
      ...options,
      signal,
    })
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};
