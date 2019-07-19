import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckRoleService {
data
sdata
  constructor() { 
    //Buyer 
    var retrivedData=localStorage.getItem("buyerData")
    var newData=JSON.parse(retrivedData)
    let buyerData=newData
    this.data=newData
    //Seller
    var retrivedData2=localStorage.getItem("sellerData")
    var newsellerData=JSON.parse(retrivedData2)
    let sellerData=newsellerData
    this.sdata=sellerData

  }

  isBuyerLoggedIn(){
    if(this.data.role=="Buyer"){
      return true
    }

     }
  isSellerLoggedIn(){
    if(this.sdata.role=="Seller")
      return true
  }
}
