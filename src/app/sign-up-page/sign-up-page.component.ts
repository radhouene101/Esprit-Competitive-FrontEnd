import { Component } from '@angular/core';
import {User} from "../models/User";
import {UserService} from "../services/REST/User/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent {
  user:User=new User()
  confirmPassword!:string
  constructor(
    private userService:UserService,
    private router:Router
  ) {
  }

  signup(){
    this.userService.signup(this.user);
  }
}
