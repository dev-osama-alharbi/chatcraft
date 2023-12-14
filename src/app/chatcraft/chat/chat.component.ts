import { Component } from '@angular/core';
import {MsgSentComponent} from "./msg-sent/msg-sent.component";
import {MsgReceiveComponent} from "./msg-receive/msg-receive.component";

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    MsgSentComponent,
    MsgReceiveComponent
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  isActive: boolean = true;
}
