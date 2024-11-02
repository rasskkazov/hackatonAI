import { ChatList, MessageInput } from "@/widgets";
import * as classes from "./Main.module.scss";
import { observer } from "mobx-react";

export const Main = observer(() => {
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
});
