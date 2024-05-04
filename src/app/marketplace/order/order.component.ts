import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Customer } from 'src/app/services/maryem-services/models/customer';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  customer: Customer = {};

  constructor(private jwtHelper: JwtHelperService) { }

  ngOnInit(): void {
    this.extractUserInfoFromToken();
  }

  private extractUserInfoFromToken(): void {
    const token = sessionStorage.getItem('userToken'); // Retrieve token from session storage
    console.log('Token:', token); // Log the token to console
    if (token) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      console.log('Decoded Token:', decodedToken); // Log the decoded token to console
      this.customer.email = decodedToken.sub; // Assuming email is the username
      this.customer.fullname = decodedToken.name; // Extract and assign the name
      this.customer.phone = decodedToken.phone; // Extract and assign the phone
      console.log('Customer Email:', this.customer.email); // Log the extracted email to console
      // You can extract other user information here and assign them to the customer object
    } else {
      console.log('Token not found'); // Log if token is not found in session storage
    }
  }
}
