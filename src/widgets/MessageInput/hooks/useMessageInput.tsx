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
  const [abortController, setAbortController] =
    useState<AbortController | null>(null);

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
    mutationFn: ({ requestMessage }: { requestMessage: string }) => {
      const controller = new AbortController();
      setAbortController(controller);

      return getResponse({ requestMessage }, controller.signal);
    },
    onMutate: () => {
      setIsLoading(true);
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
    },
    onError: (error, variables, context) => {
      setIsLoading(false);
      console.error(error);
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

  const handleCancelRequest = () => {
    if (abortController) {
      abortController.abort();
      setIsLoading(false);
      setAbortController(null);
    }
  };

  return {
    message,
    setMessage,
    handleSendMessage,
    handleChange,
    isLoading,
    handleCancelRequest,
  };
};
