import { messageStorage } from "@/pages";
import { useState, ChangeEvent } from "react";

export const useMessageInput = () => {
  const [message, setMessage] = useState("");

  const handleSendMessage = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (message.trim()) {
      console.log("Сообщение отправлено:", message);
      messageStorage.addMessage({
        text: message,
        timestamp: new Date(),
      });
      setMessage("");
    }
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
