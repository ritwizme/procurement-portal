import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateBidService {
  constructor(private http:HttpClient) { }
  createBiddingUrl:string='http://localhost:8080/bidding/create'


  registerBid(buyerId,buyerCompany,inventoryType,inventoryCount,period,rent,location,dateCreated,inventoryId){
    console.log("hey")
    console.log(buyerCompany)
    return this.http.get(this.createBiddingUrl,{
      params:{
        buyerId,
        buyerCompany,
        inventoryType,
        inventoryCount,
        period,
        rent,
        location,
        dateCreated,
        inventoryId
      }
    })
  }



}
