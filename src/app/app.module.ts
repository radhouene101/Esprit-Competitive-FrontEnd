import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, RouterOutlet, Routes} from "@angular/router";
import { MyFirstCompComponent } from './my-first-comp/my-first-comp.component';
import {FormsModule} from "@angular/forms";
import { MessageDetailsComponent } from './message-details/message-details.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';

const routes:Routes=[

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
    path:'',
    component:LoginComponent
  },{
    path:'**',//route has error
    component: NotFoundComponent
  }
]//Added for Routing
@NgModule({
  declarations: [
    AppComponent,
    MyFirstCompComponent,
    MessageDetailsComponent,
    MenuComponent,
    AboutComponent,
    LoginComponent,
    NotFoundComponent,
    SignUpPageComponent,
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    FormsModule,
    RouterModule.forRoot(routes),//Added for Routing
    HttpClientModule
  ],
  exports:[RouterModule],//Added for routing
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
