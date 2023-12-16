import {Injectable} from '@angular/core';
import {AxiosService} from "./axios.service";
import {NewMsgDTO} from "../dto/new.msg.dto";
import {MsgDTO} from "../dto/msg.dto";
import {ApiResponse} from "../dto/api.response.dto";
import {ModelsService} from "./models.service";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private axiosService: AxiosService) {
  }

  addMsg(projectId: number, newMsg: NewMsgDTO) {
    this.axiosService.request(
      "POST",
      `api/v1/chat/project/${projectId}/msg`,
      newMsg
    )
  }

  getAllMsg(projectId: number, models: ModelsService) {
    // console.log("zzzzzzzzzzzzzzzzz => ")
    //
    // this.axiosService.request(`api/v1/chat/project/${projectId}/msg`)
    //   .then(value => {
    //     // console.log("AARR => "+JSON.parse(value.data));
    //     const body: ApiResponse = JSON.parse(value.data) as ApiResponse;
    //     if (!body.hasErrors) {
    //       switch (body.type) {
    //         case "MSG_ALL": {
    //           models.addAllMsg(body.body as MsgDTO[]);
    //         }
    //       }
    //     } else {
    //     }
    //   });

    console.log("AARR => --------------------");
    this.axiosService.request(
      "GET",
      `api/v1/chat/project/${projectId}/msg`,
      undefined
    ).then(value => {
      console.log("AARR => "+value.data);
      const body: ApiResponse = value.data as ApiResponse;
      if (!body.hasErrors) {
        switch (body.type) {
          case "MSG_ALL":
            models.addAllMsg(body.body as MsgDTO[]);
          break;
          default:{
            console.log("AAAAAAAAA "+body.type);
          }
        }
      } else {
      }
    });
  }
}
