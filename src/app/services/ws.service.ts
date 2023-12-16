import { Injectable } from '@angular/core';
import {Stomp} from "@stomp/stompjs";
import SockJS from "sockjs-client";

@Injectable({
  providedIn: 'root'
})
export class WsService {
  listMsg: string[] = [];
  private stompClient : any;
  constructor() {

    this.initConnenctionSocket();
  }



  addMsg(msg: string){
    this.listMsg.push(msg);
    console.log("wswswswsws msg = "+msg);
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
      // this.stompClient.subscribe("/topic/chat.1.lsn.add_tag", (message:any) => {
      //   const messageContent = JSON.parse(message.body);
      //   console.log(messageContent);
      // });
      //
      // this.stompClient.subscribe(`/topic/chat`, (message:any) => {
      //   const messageContent = JSON.parse(message.body);
      //   console.log(messageContent);
      // });
    });

  }

  subAddMsg(callback: (msg: string) => any){
    this.stompClient.subscribe("/topic/chat.1.lsn.add_msg", (message:any) => {
      const messageContent = message.body;
      callback(messageContent);
    });
  }

  subAddTag(callback: (msg: string) => any){
    this.stompClient.subscribe("/topic/chat.1.lsn.add_tag", (message:any) => {
      const messageContent = message.body;
      callback(messageContent);
    });
  }

  subEditTag(callback: (msg: string) => any){
    this.stompClient.subscribe("/topic/chat.1.lsn.edit_tag", (message:any) => {
      const messageContent = message.body;
      callback(messageContent);
    });
  }

  subDeleteTag(callback: (msg: string) => any){
    this.stompClient.subscribe("/topic/chat.1.lsn.delete_tag", (message:any) => {
      const messageContent = message.body;
      callback(messageContent);
    });
  }

  subLoginUser(callback: (msg: string) => any){
    this.stompClient.subscribe("/topic/chat.1.lsn.login_user", (message:any) => {
      const messageContent = message.body;
      callback(messageContent);
    });
  }

  subLogoutUser(callback: (msg: string) => any){
    this.stompClient.subscribe("/topic/chat.1.lsn.logout_user", (message:any) => {
      const messageContent = message.body;
      callback(messageContent);
    });
  }



  // sendOsama(){
  //   this.stompClient.send(`/topic/send`, {}, `hi hi hi`);
  // }
  //
  // joinRoom(roomId: string){
  //   this.stompClient.connect({}, () => {
  //     this.stompClient.subscribe(`/topic/${roomId}`, (message:any) => {
  //       const messageContent = JSON.parse(message.body);
  //       console.log(messageContent);
  //     });
  //   });
  // }
  //
  // sendMessage(roomId:string, chatMessage:ChatMessage){
  //   this.stompClient.send(`/app/chat/${roomId}`, {}, JSON.stringify(chatMessage));
  // }
}
