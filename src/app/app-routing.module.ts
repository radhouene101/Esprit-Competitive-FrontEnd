import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, RouterOutlet, Routes} from "@angular/router";
import {AddContestComponent} from "./components/bal-de-project-components/add-contest/add-contest.component";
import {AdminDashboardComponent} from "./pages/bal-de-projet-pages/admin-dashboard/admin-dashboard.component";
import {ContestComponent} from "./pages/bal-de-projet-pages/contest/contest.component";
import {MyFirstCompComponent} from "./my-first-comp/my-first-comp.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {SignUpPageComponent} from "./sign-up-page/sign-up-page.component";
import {AboutComponent} from "./about/about.component";
import {LoginComponent} from "./login/login.component";
import {ChatPageComponent} from "./chat-page/chat-page.component";
import {ActivateAccountComponent} from "./pages/activate-account/activate-account.component";
import {RoleComponent} from "./pages/role/role.component";
import { ProductsFrontComponent } from './marketplace/products-front/products-front.component';
import { CartComponent } from './marketplace/cart/cart.component';
import { OrderComponent } from './marketplace/order/order.component';


const routes:Routes=[
  {
    path:'role',
    component:RoleComponent
  },
  {
    path:'home',
    component:MyFirstCompComponent
  },
  {
    path:'signup',
    component:SignUpPageComponent
  },
  {
    path:'about',
    component:AboutComponent
  },

  {
    path:'about/:username',//Path Param
    component:AboutComponent
  },
  {
    path:'notfound',//Path Param
    component:NotFoundComponent
  },
  {
    path:'messages',//Path Param
    component:ChatPageComponent
  },
  {
    path: 'products', // Define the path for ProductsFrontComponent
    component: ProductsFrontComponent // Specify the component for the path
  },
  {
    path: 'cart', // Define the path for ProductsFrontComponent
    component: CartComponent // Specify the component for the path
  },
  {
    path: 'order', // Define the path for ProductsFrontComponent
    component: OrderComponent // Specify the component for the path
  },
  {
    path:'',
    component:LoginComponent
  },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    children :[
      {path: 'add-contest', component: AddContestComponent}
    ]
  },
  {
    path:'contest',
    component:ContestComponent
  },
  {
    path:'activateAccount/:hash/:email',
    component:ActivateAccountComponent
  },
  {
    path:'**',//route has error
    component: NotFoundComponent
  }
]//Added for Routing
@NgModule({
  declarations: [],
  exports:[RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),//Added for Routing
    RouterOutlet,
  ]
})
export class AppRoutingModule { }
