import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/REST/User/user.service";
import {Router} from "@angular/router";
import {User} from "../../services/User/models/user";
import {UserDetails} from "../../models/UserDetails";
import {ForgotpasswordControllerService} from "../../services/Role/services/forgotpassword-controller.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  user:UserDetails=new UserDetails();
  constructor(
    private userService:UserService,private forgotpassword:ForgotpasswordControllerService
  ) {
  }
  login(){
    this.userService.authenticate(this.user);
  }

  forgot(email: any ){
    const params = {       email: email    };

    this.forgotpassword.forgotPassword(params).subscribe()
  }

  protected readonly sessionStorage = sessionStorage;
}
