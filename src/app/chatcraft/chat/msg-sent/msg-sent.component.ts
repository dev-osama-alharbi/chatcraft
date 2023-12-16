import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-msg-sent',
  standalone: true,
  imports: [],
  templateUrl: './msg-sent.component.html',
  styleUrl: './msg-sent.component.css'
})
export class MsgSentComponent {
  @Input() msg!: string;

}
