import { CancelRequest, SendMessage } from "@/features";
import { FormControl, InputLabel, Input, InputAdornment } from "@mui/material";
import { ChangeEvent, useState } from "react";
import * as classes from "./MessageInput.module.scss";
import { useMessageInput } from "./hooks/useMessageInput";
import { observer } from "mobx-react";
import { LoadingAnimation } from "@/shared/components";

export const MessageInput = observer(() => {
  const {
    message,
    handleChange,
    handleSendMessage,
    isLoading,
    handleCancelRequest,
  } = useMessageInput();

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
        <InputLabel
          sx={{
            fontSize: "16px",
          }}
          htmlFor="standard-adornment-message"
        >
          Сообщение
        </InputLabel>
        <Input
          sx={{
            fontSize: "16px",
          }}
          id="standard-adornment-message"
          endAdornment={
            <InputAdornment position="end">
              {isLoading && (
                <CancelRequest handleCancelRequest={handleCancelRequest} />
              )}
              {!isLoading && <SendMessage />}
            </InputAdornment>
          }
          onChange={handleChange}
          value={message}
        />
      </FormControl>
      {isLoading && (
        <div className={classes.loadingAnimationContainer}>
          <LoadingAnimation />
        </div>
      )}
    </form>
  );
});
