import { Component, OnInit } from '@angular/core';
import { MarketplaceProductControllerService } from '../../services/maryem-services/services/marketplace-product-controller.service';
import { MarketplaceProduct } from '../../services/maryem-services/models/marketplace-product';
import { ProductCategory } from '../../services/maryem-services/models/product-category';

@Component({
  selector: 'app-products-front',
  templateUrl: './products-front.component.html',
  styleUrls: ['./products-front.component.css']
})
export class ProductsFrontComponent implements OnInit {
  products: MarketplaceProduct[] = [];
  filteredProducts: MarketplaceProduct[] = [];
  categories: ProductCategory[] = [];
  assetsImagePath = '/assets/images/';

  constructor(private productService: MarketplaceProductControllerService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getProductCategories();
  }

  getProducts(): void {
    this.productService.getAllProducts()
      .subscribe(products => {
        this.products = products;
        this.filteredProducts = products; // Initially, display all products
      });
  }

  getProductCategories(): void {
    // Assuming you have a service method to fetch categories
    this.productService.getProductCategories()
      .subscribe(categories => this.categories = categories);
  }

  filterProductsByCategory(event: Event): void {
    const categoryId = (event.target as HTMLSelectElement).value;
    if (categoryId === '') {
      // If no category selected, display all products
      this.filteredProducts = this.products;
    } else {
      // Filter products based on selected category
      this.filteredProducts = this.products.filter(product => product.category && product.category.id === Number(categoryId));
    }
  }
}
