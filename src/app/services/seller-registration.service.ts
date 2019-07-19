import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SellerRegistrationService {

  constructor(private http:HttpClient) { }
  buyerRegisterUrl:string='http://localhost:8080/seller/create'

  
  register(companyName,registrationNumber,gstNumber,supervisor,contact,address,emailId,password){
    
    console.log("send")
    console.log(companyName)
    return this.http.get(this.buyerRegisterUrl,{
      params:{
        companyName,
        registrationNumber,
        gstNumber,
        supervisor,
        contact,
        address,
        emailId,
        password
      }
      
    });
  }
}
