import { SendMessage } from "@/features";
import { FormControl, InputLabel, Input, InputAdornment } from "@mui/material";
import { ChangeEvent, useState } from "react";
import * as classes from "./MessageInput.module.scss";
import { useMessageInput } from "./hooks/useMessageInput";
export const MessageInput = () => {
  const { message, handleChange, handleSendMessage } = useMessageInput();

  return (
    <form
      onSubmit={handleSendMessage}
      autoComplete="off"
      className={classes.form}
    >
      <FormControl
        sx={{ m: 1, width: "100%", fontSize: "16px" }}
        variant="standard"
      >
        <InputLabel htmlFor="standard-adornment-message">Сообщение</InputLabel>
        <Input
          id="standard-adornment-message"
          endAdornment={
            <InputAdornment position="end">
              <SendMessage />
            </InputAdornment>
          }
          onChange={handleChange}
          value={message}
        />
      </FormControl>
    </form>
  );
};
