import { Injectable } from '@angular/core';
import {Observable,of} from "rxjs";
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
@Injectable({
  providedIn: 'root'
})
export class StompService {
  baseUrl:string="http://localhost:8083/ws"
  socket=new SockJS(this.baseUrl);
  stompClient=Stomp.over(this.socket);
  constructor() { }
  subscribe(topic:string,callback?:any){
    const connected:boolean=this.stompClient.connected;
    if(connected){
      this.subscribeToTopic(topic,callback);
      return;
    }
    this.stompClient.connect({},()=>{
      this.subscribeToTopic(topic, callback);
    })
  }
  private subscribeToTopic(topic:string,callback?:any){
    this.stompClient.subscribe(topic,()=>{
      callback();
    })

  }

  sendRequest(url:string,data:any){
    this.stompClient.send(url,{},data);
  }
}
