import { Component } from '@angular/core';
import {UserDto} from "../../services/models/user-dto";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/services/authentication.service";
import {register} from "../../services/fn/authentication/register";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  userDto : UserDto ={email: "", fullname: "", password: ""};
  errorMessages : Array<string> =[];
  constructor(
    private router:Router,
    private authService: AuthenticationService
    )
  { }

  register1() {
    console.log(this.userDto.email  )
    this.authService.register({
      body: this.userDto
    }).subscribe({
      next :(data)=>{
        console.log(data)
      },
      error:(err)=>{
        this.errorMessages=err.error.validationErros
      }
    })
  }
}
