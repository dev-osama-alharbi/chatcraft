import { Injectable } from '@angular/core';
import {MsgDTO} from "../dto/msg.dto";

@Injectable({
  providedIn: 'root'
})
export class ModelsService {
  listMsg: Array<MsgDTO> = [];

  constructor() { }
  addMsg(msg: MsgDTO){
    this.listMsg.push(msg);
  }

  addAllMsg(allMsg: MsgDTO[]) {
    console.log("hhhhhhhhiiiiiii    -  - - - "+allMsg.length);
    this.listMsg = [];
    allMsg.forEach(value => {
      this.listMsg.push(value);
    });
  }
}
