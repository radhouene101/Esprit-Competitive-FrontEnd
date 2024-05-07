import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/services/maryem-services/models/cart-item';
import { Customer } from 'src/app/services/maryem-services/models/customer';
import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: 'app-order2',
  templateUrl: './order2.component.html',
  styleUrls: ['./order2.component.css']
})
export class Order2Component implements OnInit {
  customer: Customer = {};
  cartItems: CartItem[] = [];

  constructor(private route: ActivatedRoute,
    private jwtHelper: JwtHelperService
  ) { }

  ngOnInit(): void {

    this.extractUserInfoFromToken();
    this.route.paramMap.subscribe(params => {
      if (window.history.state && window.history.state.cartItems) {
        this.cartItems = window.history.state.cartItems;
        console.log('Cart items received in Order2Component:', this.cartItems);
      } else {
        console.log('No cart items received in Order2Component');
      }
    });
  }
  private extractUserInfoFromToken(): void {
    const token = sessionStorage.getItem('userToken');
    console.log('Token:', token);
    if (token) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      console.log('Decoded Token:', decodedToken);
      this.customer.email = decodedToken.sub;
      this.customer.fullname = decodedToken.name;
      this.customer.phone = decodedToken.phone;
      console.log('Customer Email:', this.customer.email);
    } else {
      console.log('Token not found');
    }
  }

}
