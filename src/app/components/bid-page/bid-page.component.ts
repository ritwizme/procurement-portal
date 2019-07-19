import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bid-page',
  templateUrl: './bid-page.component.html',
  styleUrls: ['./bid-page.component.css']
})
export class BidPageComponent implements OnInit {
data
  constructor() { }

  ngOnInit() {
    var retrivedData=localStorage.getItem("buyerData")
    var newData=JSON.parse(retrivedData)
    let buyerData=newData
    this.data=newData
    //console.log(buyerData.buyerId)
    //console.log(newData.buyerId)
    console.log(this.data.companyName)
  }

}
