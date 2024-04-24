import { Component } from '@angular/core';
import {UserDto} from "../../services/models/user-dto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  userDto : UserDto ={email: "", fullname: "", password: ""};

  constructor(private router:Router)
  { }


}
