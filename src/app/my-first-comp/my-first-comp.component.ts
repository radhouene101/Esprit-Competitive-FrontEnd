import { Component } from '@angular/core';
import {MyFirstService} from "../services/my-first.service";

@Component({
  selector: 'app-my-first-comp',
  templateUrl: './my-first-comp.component.html',
  styleUrls: ['./my-first-comp.component.css']
})
export class MyFirstCompComponent {
  name:string="";
  email:string="";
  isSubmitted: boolean=false;
  messages:Array<any>=[];

  constructor(
    private service:MyFirstService
  ) {
    this.messages=this.service.getAllMessages();
    this.isSubmitted= this.messages.length >0;
  }

  onSubmit(){
    console.log(this.name);
    this.isSubmitted=true;
    this.service.insert({
      'name': this.name,
      'email': this.email
    });
  }

  deleteMessage(index: number) {
    this.service.deleteMessage(index);
  }
}
