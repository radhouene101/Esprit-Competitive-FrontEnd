import {Component, OnInit} from '@angular/core';
import {UserService} from "./services/REST/User/user.service";
import {HelperService} from "./services/helper/helper.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FrontEnd';
    protected readonly UserService = UserService;
    constructor(
      private jwtHelper : HelperService,
    ) {}
  user:string[]=[]

  ngOnInit(): void {
      this.user=this.jwtHelper.userRolesNames
  }


}
