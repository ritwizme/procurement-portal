import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/auth.service';
import { CheckRoleService } from '../../services/check-role.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})



export class NavbarComponent implements OnInit {
 /* retriveData:any = localStorage.getItem("buyerData");
  newData=JSON.parse(this.retriveData);
  buyerData:any=this.newData;
  
  */
  data

seller
 
  constructor(private loginService:AuthenticationService, private checkrole: CheckRoleService) { 
   
  }

  ngOnInit() {
    //forbuyer
    console.log(localStorage.getItem("buyerData"))
    var retrivedData=localStorage.getItem("buyerData")
    var newData=JSON.parse(retrivedData)
    let buyerData=newData
    this.data=newData
    //console.log(buyerData.buyerId)
    //console.log(newData.buyerId)
    console.log(this.data)

    //forseller

    var retrivedData2=localStorage.getItem("sellerData")
    this.seller=JSON.parse(retrivedData2)
    
    //console.log(buyerData.buyerId)
    //console.log(newData.buyerId)
    console.log("welcome seller")
    console.log(this.seller)
    
    
  }

  callme(){
    //localStorage.getItem("buyerData")
    var newData=JSON.parse(localStorage.getItem("buyerData"))
    //console.log(this.newData)
    //console.log(localStorage.getItem("buyerData"))
    //console.log(this.buyerData)
   // console.log(newData)
    console.log(this.data.buyerId)
  }
 

  

}



