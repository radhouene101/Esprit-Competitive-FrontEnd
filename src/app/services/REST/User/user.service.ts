import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../../models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl:string="http://localhost:8083/"
  constructor(private http:HttpClient) { }

  authenticate(user:User){
    let url="http://localhost:8083/authentication"
    return this.http.post<any>(url,user);
  }
}
