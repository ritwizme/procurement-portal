import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentMachineryService {

  constructor(private http: HttpClient) {  }
  regUrl:string='http://localhost:8080/inventory/create'

  registerMachine(sellerId,companyName,inventoryDescription,inventoryType,rent,rentType,inventoryCount){
    console.log("sent")
    console.log(sellerId)

    return this.http.get(this.regUrl,{
      params:{
        sellerId,
        companyName,
        inventoryDescription,
        inventoryType,
        rent,
        rentType,
        inventoryCount
      }
    })
  }

}


