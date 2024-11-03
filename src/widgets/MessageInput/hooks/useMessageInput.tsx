import { messageStorage } from "@/pages";
import { mockGet } from "@/shared/api/constMockApi";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState, ChangeEvent } from "react";
import { v4 as uuidv4 } from "uuid";
import { getResponse, TResponse } from "../model/getResponse";
import { LoadingAnimation } from "@/shared/components";
import { TMessage } from "@/entities";

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
    { requestMessage: string },
    { loadingMessageId: string }
  >({
    mutationFn: ({ requestMessage }: { requestMessage: string }) => {
      return getResponse({ requestMessage });
    },
    onMutate: () => {
      setIsLoading(true);

      const loadingMessage: TMessage = {
        id: uuidv4(),
        content: <LoadingAnimation />,
        timestamp: new Date(),
        sender: "bot",
      };

      const loadingMessageId = loadingMessage.id;

      messageStorage.addMessage(loadingMessage);
      return { loadingMessageId: loadingMessage.id };
    },
    onSuccess: (response: TResponse[], variables, context) => {
      response.map((res) => {
        messageStorage.addMessage({
          id: uuidv4(),
          content: res.data,
          timestamp: new Date(),
          sender: "bot",
        });
      });

      setIsLoading(false);
      if (context?.loadingMessageId) {
        messageStorage.removeMessage(context.loadingMessageId);
      }
    },
  });

  const handleSendMessage = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (message.trim() === "") return;

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
