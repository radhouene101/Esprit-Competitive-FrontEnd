import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../models/User";
import {UserService} from "../services/REST/User/user.service";

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent implements OnInit{
  user:User=new User();
  ngOnInit(): void {
    if(!sessionStorage.getItem('userToken')){
      this.router.navigate(['notfound'])
    }else{

    }
  }
  constructor(
    private router:Router,
    private userService:UserService
  ) {
  }

  displayData() {
    let res=this.userService.getUserData();
    console.log(res);
  }
}
