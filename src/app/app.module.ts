import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
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
import { UserChatComponent } from './components/chat/user-chat/user-chat.component';
import { SelectedUserChatComponent } from './components/chat/selected-user-chat/selected-user-chat.component';
import { ActivateAccountComponent } from './pages/activate-account/activate-account.component';
import {RoleComponent} from "./pages/role/role.component";
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LoadingMessageComponent } from './components/chat/loading-message/loading-message.component';
import { EventsComponent } from './pages/eventpage/events/events.component';
import { EventsdetailsComponent } from './pages/eventpage/eventsdetails/eventsdetails.component';
import {NgOptimizedImage} from "@angular/common";
import { ServiceWorkerModule } from '@angular/service-worker';
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";
import {AgmCoreModule} from "@druk/agm-core";
import { CompetitionsPageComponent } from './pages/competition-page/competitions-page/competitions-page.component';
import { CompetitionsCardComponent } from './pages/competition-page/competitions-card/competitions-card.component';

import { ProductsFrontComponent } from './marketplace/products-front/products-front.component';
import { CartComponent } from './marketplace/cart/cart.component';
import { OrderComponent } from './marketplace/order/order.component';
import { JwtModule } from '@auth0/angular-jwt';
import { Order2Component } from './marketplace/order2/order2.component';
import { ProductsBackComponent } from './marketplace/products-back/products-back.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OrdersBackComponent } from './marketplace/orders-back/orders-back.component';
import { UploadVideoComponent } from './pages/upload-video/upload-video.component';
import { VideoDetailsComponent } from './pages/video-details/video-details.component';

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
    AddContestComponent,
    UserChatComponent,
    SelectedUserChatComponent,
    ActivateAccountComponent,
    RoleComponent,
    ForgotPasswordComponent,
    LoadingMessageComponent,
    EventsComponent,
    EventsdetailsComponent,
    CompetitionsPageComponent,
    CompetitionsCardComponent,
    OrderComponent,
    ProductsFrontComponent,
    CartComponent,
    Order2Component,
    OrdersBackComponent,
    ProductsBackComponent,
    UploadVideoComponent,
    VideoDetailsComponent
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
        BrowserAnimationsModule, NoopAnimationsModule, ReactiveFormsModule,
        JwtModule.forRoot({
          config: {
            tokenGetter: () => sessionStorage.getItem('userToken')
          }
        }),
        SweetAlert2Module.forRoot(),
        LayoutModule,
      AgmCoreModule.forRoot({
        apiKey: 'AIzaSyCZ8-b4aGYLmIYlq-Ksk5Dg7kyB3KzFrHg'
      }),
      NgOptimizedImage, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: !isDevMode(),
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})
    ],
  exports:[],//Added for routing
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
