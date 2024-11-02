import { MessageInput } from "@/widgets";
import * as classes from "./Main.module.scss";

export const Main = () => {
  return (
    <div className={classes.container}>
      <div className={classes.messageInputContainer}>
        <MessageInput />
      </div>
    </div>
  );
};
