import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, RouterOutlet, Routes} from "@angular/router";
import {AddContestComponent} from "./components/bal-de-project-components/add-contest/add-contest.component";
import {AdminDashboardComponent} from "./pages/bal-de-projet-pages/admin-dashboard/admin-dashboard.component";
import {ContestComponent} from "./pages/bal-de-projet-pages/contest/contest.component";
import {MyFirstCompComponent} from "./pages/my-first-comp/my-first-comp.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {SignUpPageComponent} from "./pages/sign-up-page/sign-up-page.component";
import {AboutComponent} from "./pages/about/about.component";
import {LoginComponent} from "./pages/login/login.component";
import {ChatPageComponent} from "./pages/chat/chat-page/chat-page.component";
import {ActivateAccountComponent} from "./pages/activate-account/activate-account.component";
import {RoleComponent} from "./pages/role/role.component";
import {ForgotPasswordComponent} from "./pages/forgot-password/forgot-password.component";
import {EventsComponent} from "./pages/eventpage/events/events.component";
import {EventsdetailsComponent} from "./pages/eventpage/eventsdetails/eventsdetails.component";
import {CompetitionsPageComponent} from "./pages/competition-page/competitions-page/competitions-page.component";

import { ProductsFrontComponent } from './marketplace/products-front/products-front.component';
import { CartComponent } from './marketplace/cart/cart.component';
import { OrderComponent } from './marketplace/order/order.component';
import { Order2Component } from './marketplace/order2/order2.component';
import { ProductsBackComponent } from './marketplace/products-back/products-back.component';
import { OrdersBackComponent } from './marketplace/orders-back/orders-back.component';

const routes:Routes=[
  {
    path:'forgotpassword',
    component:ForgotPasswordComponent
  },
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
    path:'events',
    component:EventsComponent
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
    path:'productsback',//Path Param
    component:  ProductsBackComponent

  },

  {
    path:'ordersback',//Path Param
    component:  OrdersBackComponent
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
    path: 'order2', // Define the path for ProductsFrontComponent
    component: Order2Component // Specify the component for the path
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
  {path:"showevent/:id",component: EventsdetailsComponent},
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
