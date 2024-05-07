import { Component, OnInit } from '@angular/core';
import { MarketplaceProductControllerService } from '../../services/maryem-services/services/marketplace-product-controller.service';
import { MarketplaceProduct } from '../../services/maryem-services/models/marketplace-product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-back',
  templateUrl: './products-back.component.html',
  styleUrls: ['./products-back.component.css']
})
export class ProductsBackComponent implements OnInit {
  products: MarketplaceProduct[] = [];
  assetsImagePath = '/assets/images/';

  constructor(private productService: MarketplaceProductControllerService, private router: Router,) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getAllProducts().subscribe(
      (products: MarketplaceProduct[]) => {
        this.products = products;
      },
      (error) => {
        console.error('Error fetching products: ', error);
      }
    );
  }

  // Function to navigate to /addproductbacks route
  navigateToAddProductBacks() {
    this.router.navigate(['addproductsback']);
  }

  deleteProduct(productId?: number): void {
    if (productId) {
      const params = { id: productId };

      this.productService.deleteProduct(params).subscribe(
        () => {
          // Remove the deleted product from the products array
          this.products = this.products.filter(product => product.id !== productId);
        },
        (error) => {
          console.error('Error deleting product:', error);
        }
      );
    }
  }

  updateProduct(productId?: number): void {
    if (productId) {
      // Implement update product functionality
      // Call the appropriate service method to update the product
    }
  }
}
