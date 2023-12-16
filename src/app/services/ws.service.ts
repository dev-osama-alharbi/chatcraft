import { Injectable } from '@angular/core';
import {Stomp} from "@stomp/stompjs";
import SockJS from "sockjs-client";
import {ApiResponse} from "../dto/api.response.dto";
import {MsgDTO} from "../dto/msg.dto";
import {ModelsService} from "./models.service";

@Injectable({
  providedIn: 'root'
})
export class WsService {
  private stompClient : any;
  constructor() {

    this.initConnenctionSocket();
  }





// في خطا بحاول اصلحه
  initConnenctionSocket(){
    // const url = 'https://2925-51-39-65-71.ngrok-free.app/ws';//This from the backend..
    const url = 'http://localhost:8080/ws';//This from the backend..
    const socket = new SockJS(url);
    this.stompClient = Stomp.over(socket);
  }
//
  projectId = 1;
  connect(callback: () => any){//
    this.stompClient.connect({}, () => {
      callback();
    });

  }

  subLsn(projectId: number,models:ModelsService){
    this.stompClient.subscribe(`/topic/chat.${projectId}.lsn`, (message:any) => {
      const body: ApiResponse = JSON.parse(message.body);
      if(!body.hasErrors){
        switch (body.type){
          case "MSG_NEW":{
            console.log("is it hi &&&&&& = "+(body.body as MsgDTO));
            models.addMsg(body.body as MsgDTO);
            // this.addMsg(JSON.parse(body.body) as MsgDTO);
          }
        }
      }else{

      }
    });
  }
}
