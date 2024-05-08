import { Injectable } from '@angular/core';
import {UserService} from "../REST/User/user.service";
import {User} from "../User/models/user";

@Injectable({
  providedIn: 'root'
})
export class UserHelperService {

  constructor(
    private userService : UserService
  ) { }
  theUser:User={}
  async fillTheUserData() {
    let res = this.userService.getUserData();
    res.subscribe({
      next: (response) => {
        this.theUser = <User>response;
        console.log(this.user.id);
        console.log(this.theUser.roles)
        console.log(this.user);
      },
      error: (response) => {
        console.log(response)
      }
    })
  }
  get user(){
    this.fillTheUserData().then(r => console.log("filled :D"));
    return this.theUser
  }
}
