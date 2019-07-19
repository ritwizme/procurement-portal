import { Component, OnInit } from '@angular/core';
import { BiddingService } from '../../services/bidding.service';
import { Bidding } from '../../models/bidding.model';
import { AcceptBiddingService } from '../../services/accept-bidding.service'

@Component({
  selector: 'app-bidding',
  templateUrl: './bidding.component.html',
  styleUrls: ['./bidding.component.css']
})
export class BiddingComponent implements OnInit {
seller
  biddings
  acceptedBidding
  constructor( private biddingService: BiddingService, private acceptBid: AcceptBiddingService) { }

  ngOnInit() {
    this.biddingService.getBidding().subscribe(biddings =>{
      this.biddings=biddings;
      console.log(biddings)


    var retrivedData=localStorage.getItem("sellerData")
    this.seller=JSON.parse(retrivedData)
    
    //console.log(buyerData.buyerId)
    //console.log(newData.buyerId)
    console.log("welcome seller")
    console.log(this.seller)
    })
  }

  fakeSellerId="5d3008a3d6fb7629602bc4bb"
  fakesellercompany="TCS"
  date="today"

  accept(){
    console.log("click")
    this.acceptBid.acceptBidding(this.biddings.biddingId,this.fakeSellerId,this.fakesellercompany, this.date ).subscribe(accepted=>{
      this.acceptedBidding=accepted
      console.log(this.acceptedBidding)
    })
  }

}
