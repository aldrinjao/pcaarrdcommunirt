import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { Ng2OdometerModule } from 'ng2-odometer'; // <-- import the module

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';

import { MainpageComponent } from './mainpage/mainpage.component';
import { AppRoutingModule } from './/app-routing.module';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { SearchbarComponent } from './searchbar/searchbar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    ContentComponent,
    FooterComponent,
    MainpageComponent,
    SearchComponent,
    ResultsComponent,
    SearchbarComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    Ng2OdometerModule.forRoot(),
    AppRoutingModule, // <-- include it in your app module

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
