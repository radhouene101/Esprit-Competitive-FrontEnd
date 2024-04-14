import { Component } from '@angular/core';
import {StompService} from "../services/WebSocket/Chat/stomp.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username:string="";
  name:string="";
  isConnected:boolean=false;
  constructor(
    private stomp:StompService
  ) {
  }
  onConnect() {
    if (this.username != "" && this.name != "") {
      this.stomp.subscribe(`/user/${this.username}/queue/messages`);
      this.stomp.subscribe(`/user/public`);
      this.stomp.sendRequest(
        '/app/user.addUser',
        JSON.stringify({username:this.username,fullname:this.name,status:'ONLINE'}));

    }
    this.isConnected=this.stomp.stompClient.connected;
  }
}
