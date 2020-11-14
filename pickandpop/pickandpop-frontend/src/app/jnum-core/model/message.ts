import {TypeMessage} from '../enum/type-message.enum';

export class Message {
  constructor(type: TypeMessage) {
    this.type = type;
    this.messages = [];
  }
  messages: string[];
  type: number;
}
