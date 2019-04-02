// Services
import { UserService } from './services/user.service';
import { AuthenticationService } from './services/authentication.service';
import { FeatureRequestItemService } from './services/feature-request-item.service';

//Modules
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule, MatSortModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NewRequestPageComponent } from './new-request-page/new-request-page.component';
import { OverviewPageComponent } from './overview-page/overview-page.component';
import { RequestAccountPageComponent } from './request-account-page/request-account-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    NewRequestPageComponent,
    OverviewPageComponent,
    RequestAccountPageComponent,
    LoginPageComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [FeatureRequestItemService, AuthenticationService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
