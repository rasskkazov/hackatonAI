import { messageStorage } from "@/pages";
import { mockGet } from "@/shared/api/constMockApi";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState, ChangeEvent } from "react";
import { v4 as uuidv4 } from "uuid";
import { getResponse, TResponse } from "../model/getResponse";

export const useMessageInput = () => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setMessage(event.target.value);
  };

  const { mutate, error, data } = useMutation<
    TResponse[],
    Error,
    { requestMessage: string }
  >({
    mutationFn: ({ requestMessage }: { requestMessage: string }) =>
      getResponse({ requestMessage }),
    onSuccess: (response: TResponse[]) => {
      response.map((res) => {
        messageStorage.addMessage({
          id: uuidv4(),
          content: res.data,
          timestamp: new Date(),
          sender: "bot",
        });
      });

      setIsLoading(false);
    },
  });

  const handleSendMessage = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (message.trim() === "") return;

    setIsLoading(true);

    messageStorage.addMessage({
      id: uuidv4(),
      content: message,
      timestamp: new Date(),
      sender: "user",
    });

    mutate({ requestMessage: message });

    setMessage("");
  };

  return {
    message,
    setMessage,
    handleSendMessage,
    handleChange,
    isLoading,
  };
};
