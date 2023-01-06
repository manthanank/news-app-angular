import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeadlinesComponent } from './top-headlines/top-headlines.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './service/api.service';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { TopBusinessHeadlinesComponent } from './top-business-headlines/top-business-headlines.component';
import { TopGeneralHeadlinesComponent } from './top-general-headlines/top-general-headlines.component';
import { TopHealthHeadlinesComponent } from './top-health-headlines/top-health-headlines.component';
import { TopScienceHeadlinesComponent } from './top-science-headlines/top-science-headlines.component';
import { TopSportsHeadlinesComponent } from './top-sports-headlines/top-sports-headlines.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
    NavbarComponent,
    FooterComponent,
    TopHeadlinesComponent,
    TopBusinessHeadlinesComponent,
    TopGeneralHeadlinesComponent, 
    TopHealthHeadlinesComponent, 
    TopScienceHeadlinesComponent, 
    TopSportsHeadlinesComponent,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
