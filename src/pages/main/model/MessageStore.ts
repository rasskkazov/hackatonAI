import { TMessage } from "@/entities";
import { makeAutoObservable } from "mobx";

class MessageStorage {
  messages: TMessage[] = [];

  constructor() {
    makeAutoObservable(this);
    // this.loadMessages();
  }

  getMessages(): TMessage[] {
    return this.messages;
  }

  addMessage(newMessage: TMessage) {
    this.messages = [...this.messages, newMessage];

    // this.saveMessages();
  }

  removeMessage(id: string) {
    this.messages = this.messages.filter((message) => message.id !== id);
  }

  private saveMessages() {
    localStorage.setItem("messages", JSON.stringify(this.messages));
  }

  private loadMessages() {
    const savedMessages = localStorage.getItem("messages");
    if (savedMessages) {
      this.messages = JSON.parse(savedMessages);
    }
  }
}

export const messageStorage = new MessageStorage();
