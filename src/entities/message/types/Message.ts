import { ReactNode } from "react";

export type TMessage = {
  id: string;
  text: ReactNode;
  timestamp: Date;
};
