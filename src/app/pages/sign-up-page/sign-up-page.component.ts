import { Component } from '@angular/core';
import {UserService} from "../../services/REST/User/user.service";
import {Router} from "@angular/router";
import {User} from "../../services/User/models/user";
import {UserDetails} from "../../models/UserDetails";
import {finalize} from "rxjs";
import {SignupControllerService} from "../../services/User/services/signup-controller.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent {
  user:UserDetails=new UserDetails();
  confirmPassword!:string
  constructor(
    private signUpController:SignupControllerService,
    private router:Router
  ) {
  }

  loading=false;
  signup(){
    Swal.fire('Welcome!','verify you email to activate your account','success').then(res=>window.location.reload())

    this.loading=true;
    this.signUpController.createUser$Response({
      body:this.user
    }).pipe(finalize(() => this.loading = false))
      .subscribe({
        next:(response)=>{
          console.log(response);
          this.router.navigate([""]);
        },
        error:()=>{
          console.log("Registration failed !!");
        }
      });
  }

}
