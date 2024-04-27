import { Component, OnInit } from '@angular/core';
import { MarketplaceProductControllerService } from '../../services/maryem-services/services/marketplace-product-controller.service'; // Import the ProductService
import { MarketplaceProduct } from '../../services/maryem-services/models/marketplace-product'    ; // Import the Product model

@Component({
  selector: 'app-products-front',
  templateUrl: './products-front.component.html',
  styleUrls: ['./products-front.component.css']
})
export class ProductsFrontComponent implements OnInit {
  products: MarketplaceProduct[] = []; 
  assetsImagePath = '/assets/images/'; // Path to your images folder

  constructor(private productService: MarketplaceProductControllerService) { }

  ngOnInit(): void {
    this.getProducts(); 
  }

  getProducts(): void {
    this.productService.getAllProducts() 
      .subscribe(products => this.products = products); 
  }
}