import * as classes from "./Chatlist.module.scss";

export const ChatList = () => {
  const messages = [
    {
      text: "hello boys",
      sender: "user",
    },
    {
      text: "hello gays",
      sender: "bot",
    },
    {
      text: "hello asdfasdf",
      sender: "user",
    },
  ];
  return (
    <div className={classes.chat}>
      <ul className={classes.messageList}>
        {messages.map((msg, index) => {
          return <div key={index}>{msg.text}</div>;
        })}
      </ul>
    </div>
  );
};
