import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyFirstService {
  messages:Array<any>=[];
  constructor() {
    this.init();
  }

  init(){
    this.insert({
      name: "Oussama",
      email: "oussama@gmail.com"
    });
  }
  insert(msg:{name:string,email:string}){
    this.messages.push(msg);
  }
  getAllMessages(){
    return this.messages;
  }

  deleteMessage(index:number){
    this.messages.splice(index,1);
  }
}
