import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token ='eyJhbGciOiJIUzI1NiJ9.eyJmdWxsTmFtZSI6InN0cmluZyIsInVzZXJJZCI6MSwic3ViIjoic3RyaW5nQHN0cmluZy5zdHJpbmciLCJhdXRob3JpdGllcyI6W3siYXV0aG9yaXR5IjoiUk9MRV9VU0VSIn1dLCJpYXQiOjE3MTM4MDE0NTAsImV4cCI6MTcxNDUyMTQ1MH0.19P8jyETw_MJEWQOy9qQ6qdqMwEC-u6vleIL8xO_jcs';
    if(token!== undefined && token !==null){
      //assign a token
      const autReq =req.clone({
        headers: new HttpHeaders({
          Authorization: 'Bearer' + token
        })
      });
      return next.handle(autReq);
    }
    return next.handle(req);
  }
}
