import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// --------------------------------Router-------------------------------------
import { AppRoutingModule } from './app-routing.module';
// --------------------------------Components-------------------------------------
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SlidersComponent } from './sliders/sliders.component';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { HireComponent } from './hire/hire.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SlidersComponent,
    CardComponent,
    HomeComponent,
    HireComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
