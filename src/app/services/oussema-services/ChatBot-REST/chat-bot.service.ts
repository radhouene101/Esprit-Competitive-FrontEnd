import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ChatBotService {
  baseUrl:string="https://generativelanguage.googleapis.com/v1beta/models/gemini-1.0-pro:generateContent?key="
  API_KEY:string="AIzaSyDEobSpIOXIUnuLh8w4fhOdGikTETuKsO0"
  constructor(
    private http:HttpClient
  ) { }

  sendMessage(msg:string){
    return this.http.post(this.baseUrl+this.API_KEY,{
      "contents": [
        {
          "role": "user",
          "parts": [
            {
              "text": msg
            }
          ]
        }
      ]
    });

  }
}
