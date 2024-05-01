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

  productQuantity: number = 1;  

  constructor(private productService: MarketplaceProductControllerService ,  private cartService: CartControllerService ) { }

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


  onAddToCart(product: MarketplaceProduct): void {
    const cartItem: CartItem = {
        product: product,
        quantity: this.productQuantity 
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
        this.productQuantity = 1;
}

incrementQuantity() {
  this.productQuantity++;
}

decrementQuantity() {
  if (this.productQuantity > 1) {
      this.productQuantity--;
  }
}
}
