import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardsComponent } from './components/cards/cards.component';
import { LoginComponent } from './components/login-signup/login-signup.component';
import { ProductDisplayComponent } from './components/product-display/product-display.component';
import { RentPageComponent } from './components/rent-page/rent-page.component';
import { LeasePageComponent } from './components/lease-page/lease-page.component';
import { BidPageComponent } from './components/bid-page/bid-page.component';
import { MachinesComponent } from './machines/machines.component';
import { LogoutComponent } from './components/logout/logout.component';
import { BiddingComponent } from './components/bidding/bidding.component';
import { FormsModule } from '@angular/forms';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { VendorLoginComponent } from './components/vendor-login/vendor-login.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { CreateBidComponent } from './components/create-bid/create-bid.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SellerProfileComponent } from './components/seller-profile/seller-profile.component';
import { LeaseFormComponent } from './omponents/lease-form/lease-form.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CardsComponent,
    LoginComponent,
    ProductDisplayComponent,
    RentPageComponent,
    LeasePageComponent,
    BidPageComponent,
    MachinesComponent,
    LogoutComponent,
    LoginFormComponent,
    BiddingComponent,
    VendorLoginComponent,
    InventoryComponent,
    CreateBidComponent,
    ProfileComponent,
    SellerProfileComponent,
    LeaseFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
