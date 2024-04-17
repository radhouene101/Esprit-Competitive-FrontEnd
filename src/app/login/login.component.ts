import { Component } from '@angular/core';
import {StompService} from "../services/WebSocket/Chat/stomp.service";
import {UserService} from "../services/REST/User/user.service";
import {User} from "../models/User";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user:User=new User();
  constructor(
    private stomp:StompService,
    private userService:UserService,
    private router:Router
  ) {
  }
  onConnect() {
    /*if (this.username != "" && this.name != "") {
      this.stomp.subscribe(`/user/${this.username}/queue/messages`);
      this.stomp.subscribe(`/user/public`);
      sessionStorage.setItem(
        "username",
        this.username
      );
    }*/
    //sessionStorage.setItem("username",this.username);

  }
  login(){
    console.log(this.user);
    const response=this.userService
      .authenticate(this.user).subscribe({
        next:(data)=>{
          if(data) {
            console.log(data['jwt']);
            console.log("Hani bch n7oto fl session !");
            sessionStorage.setItem(
              "userToken",//key
              data['jwt']//value
            );
            this.router.navigate(["home"]);
          }else console.log("Failed to fetch token ! BA7CHA7")
        }
      });

  }


  protected readonly sessionStorage = sessionStorage;
}
