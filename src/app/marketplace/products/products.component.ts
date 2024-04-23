import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/marketplace/products.service'; // Adjust the path as needed
import { products } from '../../models/products'; // Adjust the path as needed

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productsList: products[];

  constructor(private productService: ProductsService) {
    this.productsList = [];
   }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productService.getAllProducts()
      .subscribe(products => this.productsList = products);
  }
}
