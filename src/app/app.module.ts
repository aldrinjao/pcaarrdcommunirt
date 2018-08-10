import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { Ng2OdometerModule } from 'ng2-odometer'; // <-- import the module

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { ContentComponent } from './content/content.component';
import { BodyComponent } from './body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    ContentComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    Ng2OdometerModule.forRoot() // <-- include it in your app module

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
