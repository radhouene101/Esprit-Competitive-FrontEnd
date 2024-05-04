import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/services/maryem-services/models/cart-item';
import { CartItemControllerService } from '../../services/maryem-services/services/cart-item-controller.service';
import { DeleteItem$Params } from 'src/app/services/maryem-services/fn/cart-item-controller/delete-item';
import {Router} from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  assetsImagePath = '/assets/images/';

  constructor(private cartItemService: CartItemControllerService ,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.loadCartItems();
  }

  getImageUrl(imageUrl: string): string {
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
      const itemPrice = item.price ?? 0;
      return sum + itemPrice;
    }, 0);
  }

  orderNow(): void {
    // Navigate to the order page with cart items data
    this.router.navigate(['/order'], { state: { cartItems: this.cartItems } });
  }

  deleteItem(item: CartItem): void {
    if (!item.id) {
      console.error('Item ID is undefined.');
      return;
    }
    
    const params: DeleteItem$Params = { id: item.id }; // Assuming `DeleteItem$Params` is the correct parameter type
  
    this.cartItemService.deleteItem(params).subscribe(
      () => {
        // Remove the item from the cartItems array
        this.cartItems = this.cartItems.filter(cartItem => cartItem !== item);
      },
      (error) => {
        console.error('Error deleting item: ', error);
      }
    );
  }
}
