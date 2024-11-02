import { FormControl, InputLabel, Input, InputAdornment } from "@mui/material";

import SendIcon from "@mui/icons-material/Send";

export const MessageInput = () => {
  return (
    <FormControl
      sx={{ m: 1, width: "100%", fontSize: "16px" }}
      variant="standard"
    >
      <InputLabel htmlFor="standard-adornment-message">Сообщение</InputLabel>
      <Input
        id="standard-adornment-message"
        endAdornment={
          <InputAdornment position="end">
            <SendIcon />
          </InputAdornment>
        }
      />
    </FormControl>
  );
};