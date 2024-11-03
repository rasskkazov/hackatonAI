import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { messageStorage } from "@/pages";

export const ClearChat = () => {
  const clear = () => {
    messageStorage.clearMessages();
  };

  return (
    <Button variant="outlined" startIcon={<DeleteIcon />} onClick={clear}>
      Очистить
    </Button>
  );
};
