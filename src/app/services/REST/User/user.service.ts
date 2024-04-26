import { Injectable } from '@angular/core';
import {AuthentificationControllerService} from "../../User/services/authentification-controller.service";
import {AuthentificationRequest} from "../../User/models/authentification-request";
import {Router} from "@angular/router";
import {SignupControllerService} from "../../User/services/signup-controller.service";
import {RoleTestControllerService} from "../../User/services/role-test-controller.service";
import {User} from "../../User/models/user";
import {UserControllerService} from "../../User/services/user-controller.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private router:Router,
    private authController:AuthentificationControllerService,
    private signUpController:SignupControllerService,
    private getData:RoleTestControllerService,
    private getUsers:UserControllerService
  ) { }

  authenticate(user:AuthentificationRequest){

      this.authController.createAuthentificationToken({
        body:user
      }).subscribe({
        next:(reponse)=>{//code success
          sessionStorage.setItem(
            'userToken',
            <string>reponse.jwt
          );
          this.router.navigate(['home']);
        },
        error:()=> console.log("Login failed!!")
      })

  }
  signup(user:User){
    this.signUpController.createUser$Response({
      body:user
    }).subscribe({
      next:(response)=>{
        console.log(response);
      },
      error:()=>{
        console.log("Registration failed !!");
      }
    });
  }

  getUserData(){
    return this.getData.hello();
  }

  getUserList(){

    return this.getUsers.getAllUsers();

  }
}
