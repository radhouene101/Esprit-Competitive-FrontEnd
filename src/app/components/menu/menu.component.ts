import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(
    private router:Router
  ) {
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['']);
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }


}
