import { Component } from '@angular/core';
import {UserService} from "../../services/REST/User/user.service";
import {Router} from "@angular/router";
import {User} from "../../services/User/models/user";
import {UserDetails} from "../../models/UserDetails";

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent {
  user:UserDetails=new UserDetails();
  confirmPassword!:string
  loading: any;
  constructor(
    private userService:UserService,
    private router:Router
  ) {
  }

  signup(){
    this.userService.signup(this.user);
  }
}
