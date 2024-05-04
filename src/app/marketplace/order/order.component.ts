import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Customer } from 'src/app/services/maryem-services/models/customer';
import { CustomerControllerService } from 'src/app/services/maryem-services/services/customer-controller.service';
import { CreateCustomer$Params } from 'src/app/services/maryem-services/fn/customer-controller/create-customer';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/services/maryem-services/models/cart-item';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  customer: Customer = {};
  cartItems: CartItem[] = [];

  constructor(
    private jwtHelper: JwtHelperService,
    private customerService: CustomerControllerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.extractUserInfoFromToken();
    this.route.paramMap.subscribe(params => {
      if (window.history.state && window.history.state.cartItems) {
        this.cartItems = window.history.state.cartItems;
        console.log('Cart items received:', this.cartItems);
      } else {
        console.log('No cart items received');
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

  validateCustomerInfo(): void {
    // Prepare the parameters for createCustomer function
    const params: CreateCustomer$Params = {
      body: this.customer
    };

    // Call createCustomer function to create a new customer
    this.customerService.createCustomer(params)
      .subscribe(
        (response) => {
          console.log('Customer created:', response);
          // Handle success
        },
        (error) => {
          console.error('Error creating customer:', error);
          // Handle error
        }
      );
  }
}
