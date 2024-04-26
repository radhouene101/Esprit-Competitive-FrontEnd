import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, RouterOutlet, Routes} from "@angular/router";
import { MyFirstCompComponent } from './pages/my-first-comp/my-first-comp.component';
import {FormsModule} from "@angular/forms";
import { MessageDetailsComponent } from './components/chat/message-details/message-details.component';
import { MenuComponent } from './components/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { AppRoutingModule } from './app-routing.module';
import {ApiModule} from "./services/User/api.module";
import {FooterComponent} from "./components/footer/footer/footer.component";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {LayoutModule} from "@angular/cdk/layout";
import {ContestComponent} from "./pages/bal-de-projet-pages/contest/contest.component";
import {AdminDashboardComponent} from "./pages/bal-de-projet-pages/admin-dashboard/admin-dashboard.component";
import {AddContestComponent} from "./components/bal-de-project-components/add-contest/add-contest.component";
import { ChatPageComponent } from './pages/chat/chat-page/chat-page.component';
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
    ContestComponent,
    AdminDashboardComponent,
    FooterComponent,
    AddContestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
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
