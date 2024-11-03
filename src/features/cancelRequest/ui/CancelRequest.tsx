import CancelIcon from "@mui/icons-material/Cancel";
import { IconButton } from "@mui/material";

export const CancelRequest = () => {
  return (
    <IconButton aria-label="send" type="submit">
      <CancelIcon sx={{ fontSize: "24px" }} />
    </IconButton>
  );
};
