import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http'
import { RentMachineryService } from '../../services/rent-machinery.service'

@Component({
  selector: 'app-rent-page',
  templateUrl: './rent-page.component.html',
  styleUrls: ['./rent-page.component.css']
})
export class RentPageComponent {
        sellerId:""
        companyName:""
        inventoryDescription:""
        inventoryType:""
        rent:""
        rentType:""
        inventoryCount:""
seller

  constructor(private router: Router, private http:HttpClient, private rentService:RentMachineryService) { }


  register(){
    console.log("clocked")
    console.log(this.sellerId)
    this.rentService.registerMachine(this.seller.sellerId,this.seller.companyName,this.inventoryDescription,this.inventoryType,this.rent,this.rentType,this.inventoryCount).subscribe(data=>{
      console.log(data)
    })
  }

  ngOnInit() {
    var retrivedData=localStorage.getItem("sellerData")
    this.seller=JSON.parse(retrivedData)
    
    //console.log(buyerData.buyerId)
    //console.log(newData.buyerId)
    console.log("welcome seller")
    console.log(this.seller)
  }



}
