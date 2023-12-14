import { Routes } from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {LogoutComponent} from "./auth/logout/logout.component";
import {RegisterComponent} from "./auth/register/register.component";
import {Er404Component} from "./errors/404/404.component";
import {HomeComponent} from "./home/home.component";
import {MyProjectsComponent} from "./projects/my-projects/my-projects.component";
import {MyProjectsInviteComponent} from "./projects/my-projects-invite/my-projects-invite.component";
import {ChatcraftComponent} from "./chatcraft/chatcraft.component";

export const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'login',component: LoginComponent},
  {path: 'logout',component: LogoutComponent},
  {path: 'register',component: RegisterComponent},
  {path: 'projects',component: MyProjectsComponent},
  {path: 'projects/invite',component: MyProjectsInviteComponent},
  {path: 'project/:id/dashboard', component: ChatcraftComponent},
  {path: 'project/:id/chat',component: ChatcraftComponent},
  {path: 'project/:id/users',component: ChatcraftComponent},
  {path: 'project/:id/component',component: ChatcraftComponent},
  {path: 'project/:id/export',component: ChatcraftComponent},
  {path: '**',component: Er404Component}
];
