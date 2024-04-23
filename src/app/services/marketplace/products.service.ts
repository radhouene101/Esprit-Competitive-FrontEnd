import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { products } from '../../models/products'; // Import the MarketplaceProduct interface

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl = 'http://localhost:8083/api/marketplace/products';

  constructor(private http: HttpClient) { }

  createProduct(product: products): Observable<products> {
    return this.http.post<products>(`${this.baseUrl}/addProduct`, product);
  }

  getProductById(id: number): Observable<products> {
    return this.http.get<products>(`${this.baseUrl}/getProductById/${id}`);
  }

  getAllProducts(): Observable<products[]> {
    return this.http.get<products[]>(`${this.baseUrl}/getAllProducts`);
  }

  updateProduct(id: number, productDetails: products): Observable<products> {
    return this.http.put<products>(`${this.baseUrl}/updateProduct/${id}`, productDetails);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteProduct/${id}`, { responseType: 'text' });
  }
}
