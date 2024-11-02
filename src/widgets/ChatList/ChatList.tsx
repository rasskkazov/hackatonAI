import { messageStorage } from "@/pages";
import * as classes from "./Chatlist.module.scss";
import { observer } from "mobx-react";

export const ChatList = observer(() => {
  return (
    <div className={classes.chat}>
      <ul className={classes.messageList}>
        {messageStorage.getMessages().map((msg) => {
          return <div key={msg.timestamp.getTime()}>{msg.text}</div>;
        })}
      </ul>
    </div>
  );
});
