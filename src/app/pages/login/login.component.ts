import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/REST/User/user.service";
import {Router} from "@angular/router";
import {User} from "../../services/User/models/user";
import {UserDetails} from "../../models/UserDetails";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  user:UserDetails=new UserDetails();
  constructor(
    private userService:UserService,
  ) {
  }
  login(){
    this.userService.authenticate(this.user);
  }

  protected readonly sessionStorage = sessionStorage;
}
