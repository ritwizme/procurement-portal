import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDisplayComponent } from './components/product-display/product-display.component';
import { CardsComponent } from './components/cards/cards.component';
import { RentPageComponent } from './components/rent-page/rent-page.component';
import { LeasePageComponent } from './components/lease-page/lease-page.component';
import { BidPageComponent } from './components/bid-page/bid-page.component';
import { MachinesComponent } from './machines/machines.component'


const routes: Routes = [
  {path: 'index', component : CardsComponent},
  {path: 'product-display', component : ProductDisplayComponent},
  {path: 'rent', component : RentPageComponent},
  {path: 'lease', component : LeasePageComponent},
  {path: 'bid', component : BidPageComponent},
  {path: 'machines', component: MachinesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
