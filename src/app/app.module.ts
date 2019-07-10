import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardsComponent } from './components/cards/cards.component';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';
import { ProductDisplayComponent } from './components/product-display/product-display.component';
import { RentPageComponent } from './components/rent-page/rent-page.component';
import { LeasePageComponent } from './components/lease-page/lease-page.component';
import { BidPageComponent } from './components/bid-page/bid-page.component';
import { MachinesComponent } from './machines/machines.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CardsComponent,
    LoginSignupComponent,
    ProductDisplayComponent,
    RentPageComponent,
    LeasePageComponent,
    BidPageComponent,
    MachinesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
