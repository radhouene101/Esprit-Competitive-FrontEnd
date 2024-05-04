import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, RouterOutlet, Routes} from "@angular/router";
import {MyFirstCompComponent} from "./my-first-comp/my-first-comp.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {SignUpPageComponent} from "./sign-up-page/sign-up-page.component";
import {AboutComponent} from "./about/about.component";
import {LoginComponent} from "./login/login.component";
import {ChatPageComponent} from "./chat-page/chat-page.component";
import {AddContestComponent} from "./components/bal-de-project-components/add-contest/add-contest.component";
import {AdminDashboardComponent} from "./pages/bal-de-projet-pages/admin-dashboard/admin-dashboard.component";
import {ContestComponent} from "./pages/bal-de-projet-pages/contest/contest.component";
import {ProjectFormComponent} from "./components/bal-de-project-components/project-form/project-form.component";
import {ShowContestComponent} from "./pages/show-contest/show-contest.component";
import {UpdateContestComponent} from "./pages/update-contest/update-contest.component";
import {ShowProjectDetailsComponent} from "./pages/show-project-details/show-project-details.component";
import {UpdateProjectComponent} from "./pages/update-project/update-project.component";
import {ShowAllProjectsComponent} from "./pages/show-all-projects/show-all-projects.component";


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
    path:'notfound',//Path Param
    component:NotFoundComponent
  },
  {
    path:'messages',//Path Param
    component:ChatPageComponent
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
    component:ContestComponent,
  },
  {path: "show-contest/:id",
    component:ShowContestComponent
  },
  {path: "update-contest/:id",
    component:UpdateContestComponent
  },
  {path: "show-project-details/:id",
    component:ShowProjectDetailsComponent
  },
  {path: "update-project/:id",
    component:UpdateProjectComponent
  },
  {path: "show-all-projects",
    component:ShowAllProjectsComponent
  },
  {
    path:"add-contest",
    component:AddContestComponent
  },
  {
    path: 'admin-add-project-form',
    component:ProjectFormComponent
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
