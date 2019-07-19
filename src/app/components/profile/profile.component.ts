import { Component, OnInit } from '@angular/core';
import { GetBuyerBidsService } from '../../services/get-buyer-bids.service'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
data
  constructor(private getBuyerBid: GetBuyerBidsService) { }

bData
sData
  ngOnInit() {
   // console.log(localStorage.getItem("buyerData"))
    var retrivedData=localStorage.getItem("buyerData")
    var newData=JSON.parse(retrivedData)
    let buyerData=newData
    this.data=newData
    //console.log(buyerData.buyerId)
    //console.log(newData.buyerId)
    console.log(this.data.companyName)

    this.getBuyerBid.getByBuyerId(this.data.buyerId).subscribe(buyerData=>{
      this.bData=buyerData
      console.log(this.bData)

      


  


    })
  }


}
