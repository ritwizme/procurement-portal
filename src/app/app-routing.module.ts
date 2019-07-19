import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDisplayComponent } from './components/product-display/product-display.component';
import { CardsComponent } from './components/cards/cards.component';
import { RentPageComponent } from './components/rent-page/rent-page.component';
import { LeasePageComponent } from './components/lease-page/lease-page.component';
import { BidPageComponent } from './components/bid-page/bid-page.component';
import { MachinesComponent } from './machines/machines.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthGaurdService } from './services/auth-gaurd.service';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { InventoryComponent } from './components/inventory/inventory.component'
import { BiddingComponent } from './components/bidding/bidding.component';
import { CreateBidComponent } from './components/create-bid/create-bid.component'
import { ProfileComponent } from './components/profile/profile.component'
import { SellerGuardService } from './services/seller-guard.service'
import { BuyerGuardService } from './services/buyer-guard.service'
import{ SellerProfileComponent } from './components/seller-profile/seller-profile.component'

const routes: Routes = [
  {path:'buyer-profile', component: ProfileComponent,canActivate:[BuyerGuardService] },
  {path: 'inventory', component: InventoryComponent, canActivate:[BuyerGuardService] },
  {path: 'login', component : LoginFormComponent},
  {path: 'index', component : CardsComponent},
  {path: 'product-display', component : ProductDisplayComponent,canActivate:[AuthGaurdService] },
  {path: 'rent', component : RentPageComponent, canActivate:[SellerGuardService]},
  {path: 'lease', component : LeasePageComponent,canActivate:[AuthGaurdService] },
  {path: 'bid', component : BidPageComponent,canActivate:[AuthGaurdService]},
  {path: 'machines', component: MachinesComponent,canActivate:[AuthGaurdService] },
  { path: 'logout', component: LogoutComponent },
  { path:'bids', component: BiddingComponent, canActivate:[SellerGuardService] },
  {path: 'createBid', component: CreateBidComponent, canActivate:[BuyerGuardService] },
  {path: 'sellerProfile', component: SellerProfileComponent, canActivate:[SellerGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
