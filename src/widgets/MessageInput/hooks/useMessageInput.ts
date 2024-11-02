import { messageStorage } from "@/pages";
import { useState, ChangeEvent } from "react";
import { v4 as uuidv4 } from "uuid";

export const useMessageInput = () => {
  const [message, setMessage] = useState("");

  const handleSendMessage = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (message.trim() === "") return;
    messageStorage.addMessage({
      id: uuidv4(),
      text: message,
      timestamp: new Date(),
    });

    setMessage("");
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setMessage(event.target.value);
  };

  return {
    message,
    setMessage,
    handleSendMessage,
    handleChange,
  };
};
