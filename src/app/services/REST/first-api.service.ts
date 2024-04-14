import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FirstAPIService {
  baseUrl:string="https://fakestoreapi.com/";
  constructor(
    private http:HttpClient
  ) { }

  getAllProductsWithLimit(limit:number =5){
    const url=`${this.baseUrl}products?limit=${limit}`;
    return this.http.get<any>(url);
  }
}
