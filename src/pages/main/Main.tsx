import { ChatList, MessageInput } from "@/widgets";
import * as classes from "./Main.module.scss";

export const Main = () => {
  return (
    <div className={classes.container}>
      <div className={classes.chatContainer}>
        <ChatList />
      </div>
      <div className={classes.messageInputContainer}>
        <MessageInput />
      </div>
    </div>
  );
};
