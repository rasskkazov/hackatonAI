import { axiosInstance } from "@/shared/api/axiosInstance";

export type TResponse = {
  data: string;
};

const getOptions = {
  method: "POST",
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
    .post<TResponse[]>("ai", {
      // .get<TResponse[]>("ai", {
      ...getOptions,
      ...options,
      signal,
    })
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};
