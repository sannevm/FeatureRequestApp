import { FeatureRequestItemService } from './services/feature-request-item.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NewRequestPageComponent } from './new-request-page/new-request-page.component';
import { OverviewPageComponent } from './overview-page/overview-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    NewRequestPageComponent,
    OverviewPageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule,
  ],
  providers: [FeatureRequestItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
