import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../../services/REST/User/user.service";
import {UserDetails} from "../../../models/UserDetails";

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent implements OnInit{
  user:UserDetails=new UserDetails();
  ngOnInit(): void {
    if(!sessionStorage.getItem('userToken')){
      this.router.navigate(['notfound'])
    }else{
      this.userService.getUserData();
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
