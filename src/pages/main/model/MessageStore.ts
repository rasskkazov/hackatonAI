import { TMessage } from "@/entities";
import { makeAutoObservable } from "mobx";

class MessageStorage {
  messages: TMessage[] = [];

  constructor() {
    makeAutoObservable(this);
    this.loadMessages();
  }

  getMessages(): TMessage[] {
    return this.messages;
  }

  addMessage(newMessage: TMessage) {
    this.messages = [...this.messages, newMessage];

    this.saveMessages();
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

  clearMessages() {
    this.messages = [];
    this.saveMessages();
  }
}

export const messageStorage = new MessageStorage();
