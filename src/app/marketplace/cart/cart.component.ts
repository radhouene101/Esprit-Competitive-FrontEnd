import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/services/maryem-services/models/cart-item';
import { CartItemControllerService } from '../../services/maryem-services/services/cart-item-controller.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  assetsImagePath = '/assets/images/';


  constructor(private cartItemService: CartItemControllerService) { }

  ngOnInit(): void {
    this.loadCartItems();
  }

  getImageUrl(imageUrl: string): string {
    // Add logic to handle the dynamic retrieval of the image URL
    // For example, you can prepend the base URL or manipulate the path
    return `assets/images/${imageUrl}`;
  }

  loadCartItems() {
    this.cartItemService.getAllItems().subscribe(
      (items: CartItem[]) => {
        this.cartItems = items;
      },
      (error) => {
        console.error('Error fetching cart items: ', error);
      }
    );
  }

  getTotalSum(): number {
    if (!this.cartItems) {
      return 0;
    }
  
    return this.cartItems.reduce((sum, item) => {
      const itemQuantity = item.quantity ?? 0; // Using nullish coalescing operator (??) to provide a default value of 0 if quantity is undefined
      const itemPrice = item.price ?? 0; // Using nullish coalescing operator (??) to provide a default value of 0 if price is undefined
      return sum + ( itemPrice);
    }, 0);
  }
  

  orderNow() {
    // Handle order button click
    console.log('Order Now clicked');
  }
}
