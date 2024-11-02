import { messageStorage } from "@/pages";
import * as classes from "./Chatlist.module.scss";
import { observer } from "mobx-react";
import { UserMessage } from "@/entities";
import { useRef, useEffect } from "react";

export const ChatList = observer(() => {
  const containerRef = useRef<HTMLDivElement>(null);
  const messages = messageStorage.getMessages();

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages]);

  return (
    <div className={classes.chat} ref={containerRef}>
      <ul className={classes.messageList}>
        {messages.map((msg) => {
          return <UserMessage key={msg.id}>{msg.text}</UserMessage>;
        })}
      </ul>
    </div>
  );
});
