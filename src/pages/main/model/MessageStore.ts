import { TMessage } from "@/entities";

const FAVORITE_MOVIES = "movies";

class MessageStorage {
  private messages: TMessage[];
  constructor() {
    this.messages = [];
  }

  getMessages(): TMessage[] {
    return this.messages;
  }

  addMessage(newMessage: TMessage) {
    this.messages.push(newMessage);
    console.log(this.messages);
  }
}

export const messageStorage = new MessageStorage();
