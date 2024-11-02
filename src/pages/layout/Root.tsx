import { Outlet } from "react-router-dom";

import * as classes from "./Root.module.scss";
import { Box } from "@mui/material";
import { Drawer } from "@/shared/components";
import { AppBar } from "@/widgets";

export const Root = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer header={<AppBar />} />
      <main className={classes.main}>
        <Outlet />
      </main>
    </Box>
  );
};
