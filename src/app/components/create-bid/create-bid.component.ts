import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http'
import { CreateBidService } from '../../services/create-bid.service'
import { BiddingComponent } from '../bidding/bidding.component'
@Component({
  selector: 'app-create-bid',
  templateUrl: './create-bid.component.html',
  styleUrls: ['./create-bid.component.css']
})
export class CreateBidComponent implements OnInit {
  data
  buyerId:""
  buyerCompany:""
  inventoryType:""
  inventoryCount:""
  period:""
  rent:""
  location:""
  dateCreated:""
  newId:""
  constructor(private router: Router, private http:HttpClient, private createBidding:CreateBidService) { }
  
  createBid(){
    console.log("clicked")
this.createBidding.registerBid(this.data.buyerId,this.data.companyName,this.inventoryType,this.inventoryCount,this.period,this.rent,this.location,this.dateCreated,this.newId).subscribe(data=>{
  console.log(data);
})
this.router.navigate(['/index']);
  }

  ngOnInit() {


    var retrivedId=localStorage.getItem("currentId")
    var newId2=JSON.parse(retrivedId)
    this.newId=newId2
    console.log(this.newId)

    var retrivedData=localStorage.getItem("buyerData")
    var newData=JSON.parse(retrivedData)
    let buyerData=newData
    this.data=newData
    //console.log(buyerData.buyerId)
    //console.log(newData.buyerId)
    console.log(this.data.companyName)
    

  }

}
