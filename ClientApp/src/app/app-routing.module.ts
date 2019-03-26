import { OverviewPageComponent } from './overview-page/overview-page.component';
import { NewRequestPageComponent } from './new-request-page/new-request-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'home', component: HomePageComponent},
  { path: 'new-feature-request', component: NewRequestPageComponent},
  { path: 'overview', component: OverviewPageComponent}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }