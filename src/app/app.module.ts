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

const routes:Routes=[
  {
    path:'home',
    component:MyFirstCompComponent
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
