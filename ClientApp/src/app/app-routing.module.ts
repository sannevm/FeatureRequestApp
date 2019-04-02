import { LoginPageComponent } from './login-page/login-page.component';
import { OverviewPageComponent } from './overview-page/overview-page.component';
import { NewRequestPageComponent } from './new-request-page/new-request-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RequestAccountPageComponent } from './request-account-page/request-account-page.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent},
  { path: 'new-feature-request', component: NewRequestPageComponent},
  { path: 'overview', component: OverviewPageComponent},
  { path: 'account/register', component: RequestAccountPageComponent},
  { path: 'login', component: LoginPageComponent}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }