import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { router } from "./router/Router";

import { queryClient } from "@/shared/api/queryClient";

import "./App.scss";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

export const App = () => {
  return (
    <Suspense fallback="...Loading">
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </QueryClientProvider>
    </Suspense>
  );
};
