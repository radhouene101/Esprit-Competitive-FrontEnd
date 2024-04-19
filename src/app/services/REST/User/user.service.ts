import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../../models/User";
import {AuthentificationControllerService} from "../../User/services/authentification-controller.service";
import {
  createAuthentificationToken,
  CreateAuthentificationToken$Params
} from "../../User/fn/authentification-controller/create-authentification-token";
import {AuthentificationRequest} from "../../User/models/authentification-request";
import {AuthentificationResponse} from "../../User/models/authentification-response";
import {Router} from "@angular/router";
import {SignupControllerService} from "../../User/services/signup-controller.service";
import {HelloControllerService} from "../../User/services/hello-controller.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl:string="http://localhost:8083/"
  constructor(
    private router:Router,
    private http:HttpClient,
    private authController:AuthentificationControllerService,
    private signUpController:SignupControllerService,
    private getData:HelloControllerService
  ) { }

  authenticate(user:AuthentificationRequest){

      this.authController.createAuthentificationToken({
        body:user
      }).subscribe({
        next:(reponse)=>{
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
    let res=null;
    this.getData.hello1().subscribe({
      next:(response)=>{
        console.log(response);
        res=response;
      },
      error:()=>{
        console.log("Data failed !!");
      }
    });
    return res;
  }
}
