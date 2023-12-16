import {Component, Input} from '@angular/core';
import {MsgDTO} from "../../../dto/msg.dto";

@Component({
  selector: 'app-msg-receive',
  standalone: true,
  imports: [],
  templateUrl: './msg-receive.component.html',
  styleUrl: './msg-receive.component.css'
})
export class MsgReceiveComponent {
  @Input() msg!: MsgDTO;
}
