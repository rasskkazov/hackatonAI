import { Box, Chip } from "@mui/material";
import * as classes from "./UserMessage.module.scss";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const UserMessage = ({ children }: Props) => {
  return (
    <Box
      sx={{
        fontSize: "16px",
        padding: "10px 15px",
        backgroundColor: "#f0f0f0",
        fontFamily: "Arial, sans-serif",
        color: "#333",
        borderRadius: "20px",
        maxWidth: "80%",
        wordWrap: "break-word",
        alignSelf: "flex-end",
      }}
    >
      {children}
    </Box>
  );
};
