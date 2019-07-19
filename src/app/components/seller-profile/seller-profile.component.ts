import { Component, OnInit } from '@angular/core';
import { GetInventoryBySellerService } from '../../services/get-inventory-by-seller.service'

@Component({
  selector: 'app-seller-profile',
  templateUrl: './seller-profile.component.html',
  styleUrls: ['./seller-profile.component.css']
})
export class SellerProfileComponent implements OnInit {
  fInventory
  constructor(private getInventory: GetInventoryBySellerService) { }
seller
  ngOnInit() {


    var retrivedData=localStorage.getItem("sellerData")
    this.seller=JSON.parse(retrivedData)
    
    //console.log(buyerData.buyerId)
    //console.log(newData.buyerId)
    console.log("welcome seller")
    console.log(this.seller)

    this.getInventory.getInventoryBySellerId(this.seller.sellerId).subscribe(floatedInventory=>{
      this.fInventory = floatedInventory
      console.log(this.fInventory)
    })
  }

}
