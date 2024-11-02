import { Box } from "@mui/material";

interface Props {
  text: string;
}

export const UserMessage = ({ text }: Props) => {
  return (
    <Box
      sx={{
        alignSelf: "flex-end",
        backgroundColor: "#DCF8C6", 
        color: "black", 
        padding: "8px 12px",
        borderRadius: "12px",
        borderTopRightRadius: 0,
        maxWidth: "60%", 
        wordWrap: "break-word",
        marginBottom: "8px",
      }}
    >
      {text}
    </Box>
  );
};
