import { ReactNode } from "react";

export type TMessage = {
  id: string;
  content: ReactNode;
  timestamp: Date;
  sender: "user" | "bot";
};
