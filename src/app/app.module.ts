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
import { AppRoutingModule } from './app-routing.module';
import {ApiModule} from "./services/User/api.module";
import { ChatPageComponent } from './chat-page/chat-page.component';
import {SocketIoConfig, SocketIoModule} from "ngx-socket-io";
import {NbChatModule} from "@nebular/theme";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";

const socketConfig:SocketIoConfig={
  url:"http://localhost:8083/ws",
  options:{}
}
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
    ChatPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ApiModule.forRoot({rootUrl: 'http://localhost:8083'}),
    SocketIoModule.forRoot(socketConfig),
    NbChatModule,
    BrowserAnimationsModule,NoopAnimationsModule
  ],
  exports:[],//Added for routing
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
