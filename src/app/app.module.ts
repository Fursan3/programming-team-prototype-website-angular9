import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
// --------------------------------Router-------------------------------------
import { AppRoutingModule } from "./app-routing.module";
// --------------------------------HTTP client-------------------------------------
import { HttpClientModule } from "@angular/common/http";
// import { AgmCoreModule } from "@agm/core";
// --------------------------------rxjs-------------------------------------
import { from } from 'rxjs';
// --------------------------------Components-------------------------------------
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HireComponent } from "./hire/hire.component";
import { ContactComponent } from "./contact/contact.component";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from './home/home.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HireComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent,
  ],
  imports: [
   
    BrowserModule, AppRoutingModule, HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey:"AIzaSyCoLUMvr0KPNlrMC8u4OqY0UlKM2vo4oMc",

    })
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
