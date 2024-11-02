import { ChatList, MessageInput } from "@/widgets";
import * as classes from "./Main.module.scss";

export const Main = () => {
  return (
    <div className={classes.chatContainer}>
      <div className={classes.chatListContainer}>
        <ChatList />
      </div>
      <div className={classes.messageInputContainer}>
        <MessageInput />
      </div>
    </div>
  );
};
