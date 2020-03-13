import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

// --------------------------------Components-------------------------------------
import { AppComponent } from "./app.component";
import { SlidersComponent } from "./sliders/sliders.component";
import { HomeComponent } from "./home/home.component";
import { HireComponent } from "./hire/hire.component";
import { ContactComponent } from "./contact/contact.component";
import { AboutComponent } from "./about/about.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "hire", component: HireComponent },
  { path: "contact", component: ContactComponent },
  { path: "about", component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
