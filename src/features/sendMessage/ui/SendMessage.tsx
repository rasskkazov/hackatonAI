import SendIcon from "@mui/icons-material/Send";
import { IconButton } from "@mui/material";

interface Props {
  disabled?: boolean;
}

export const SendMessage = ({ disabled = false }: Props) => {
  return (
    <IconButton aria-label="send" type="submit" disabled={disabled}>
      <SendIcon sx={{ fontSize: "20px" }} />
    </IconButton>
  );
};
