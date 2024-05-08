import { Component, OnInit } from '@angular/core';
import { MarketplaceProductControllerService } from '../../services/maryem-services/services/marketplace-product-controller.service';
import { MarketplaceProduct } from '../../services/maryem-services/models/marketplace-product';
import { ProductCategory } from '../../services/maryem-services/models/product-category';
import { CartControllerService } from '../../services/maryem-services/services/cart-controller.service';
import { CartItem } from 'src/app/services/maryem-services/models/cart-item';
import { AddItemToCart$Params } from 'src/app/services/maryem-services/fn/cart-controller/add-item-to-cart';

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

 productQuantities: { [productId: number]: number } = {}; 

 constructor(private productService: MarketplaceProductControllerService , private cartService: CartControllerService ) { }

 ngOnInit(): void {
  this.getProducts();
  this.getProductCategories();

  // Initialize quantities in case products are fetched later
  for (const product of this.products) {
    if (product.id) { // Check if id exists
      this.productQuantities[product.id] = 1;
    }
  }
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
   this.filteredProducts = this.products;
  } else {
   this.filteredProducts = this.products.filter(product => product.category && product.category.id === Number(categoryId));
  }
 }

 decrementQuantity(product: MarketplaceProduct): void {
  const productId = product.id || 0; 
  if (this.productQuantities[productId] > 1) {
   this.productQuantities[productId]--;
  }
 }

 incrementQuantity(product: MarketplaceProduct): void {
  const productId = product.id || 0; 
  this.productQuantities[productId] = (this.productQuantities[productId] || 0) + 1; 
 }

 onAddToCart(product: MarketplaceProduct): void {
  const productId = product.id || 0; 
  const quantity = this.productQuantities[productId] || 1; 

  const cartItem: CartItem = {
   product: product,
   quantity: quantity
  };

  // Create the AddItemToCart$Params object
  const params: AddItemToCart$Params = {
   body: cartItem
  };

  this.cartService.addItemToCart(params)
   .subscribe((addedItem) => {
    // Handle successful addition (e.g., display a success message or feedback)
    console.log("Item added to cart:", addedItem);
   }, (error) => {
    // Handle error (e.g., display an error message)
    console.error("Error adding to cart:", error);
   });

  this.productQuantities[productId] = 1; // Reset after adding
 }
} 
