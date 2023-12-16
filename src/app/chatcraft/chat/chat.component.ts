import {Component, Input} from '@angular/core';
import {MsgSentComponent} from "./msg-sent/msg-sent.component";
import {MsgReceiveComponent} from "./msg-receive/msg-receive.component";
import {NgForOf, NgIf} from "@angular/common";
import {WsService} from "../../services/ws.service";
import {MsgWriteComponent} from "./msg-write/msg-write.component";
import {ModelsService} from "../../services/models.service";

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    MsgSentComponent,
    MsgReceiveComponent,
    NgForOf,
    MsgWriteComponent,
    NgIf
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  isActive: boolean = true;

  constructor(protected models:ModelsService)
  {

  }
}
