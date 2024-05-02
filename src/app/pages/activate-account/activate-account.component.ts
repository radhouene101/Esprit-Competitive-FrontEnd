import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/REST/User/user.service";

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.css']
})
export class ActivateAccountComponent implements OnInit{
  hash!:string;
  email!:string;
  constructor(
    private act:ActivatedRoute,
    private userService:UserService
  ) {
  }
  ngOnInit(): void {
    this.hash=this.act.snapshot.params['hash'];
    this.email=this.act.snapshot.params['email'];
    this.userService.verifyEmail(this.email,this.hash).subscribe({
      next:(res)=>{
        console.log(res);
        console.log("activation success");
      } ,
      error:(res)=>{
        console.log(res);
        console.log("activation failed !!");
      }
    });
  }

}
