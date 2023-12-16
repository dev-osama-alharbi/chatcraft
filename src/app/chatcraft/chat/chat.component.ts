import {Component, Input} from '@angular/core';
import {MsgSentComponent} from "./msg-sent/msg-sent.component";
import {MsgReceiveComponent} from "./msg-receive/msg-receive.component";
import {NgForOf} from "@angular/common";
import {WsService} from "../../services/ws.service";

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    MsgSentComponent,
    MsgReceiveComponent,
    NgForOf
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  isActive: boolean = true;

  constructor(public ws: WsService)
  {

  }
}
