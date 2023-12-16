import {Component, Input} from '@angular/core';
import {MsgDTO} from "../../../dto/msg.dto";

@Component({
  selector: 'app-msg-sent',
  standalone: true,
  imports: [],
  templateUrl: './msg-sent.component.html',
  styleUrl: './msg-sent.component.css'
})
export class MsgSentComponent {
  @Input() msg!: MsgDTO;

}
