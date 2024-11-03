import CancelIcon from "@mui/icons-material/Cancel";
import { IconButton } from "@mui/material";

interface Props {
  handleCancelRequest: () => void;
}
export const CancelRequest = ({ handleCancelRequest }: Props) => {
  return (
    <IconButton aria-label="send" type="submit" onClick={handleCancelRequest}>
      <CancelIcon sx={{ fontSize: "24px" }} />
    </IconButton>
  );
};
