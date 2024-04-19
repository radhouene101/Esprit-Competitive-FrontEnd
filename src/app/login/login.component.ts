import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/REST/User/user.service";
import {User} from "../models/User";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  user:User=new User();
  constructor(
    private userService:UserService,
  ) {
  }
  login(){
    this.userService.authenticate(this.user);
  }

  protected readonly sessionStorage = sessionStorage;
}
