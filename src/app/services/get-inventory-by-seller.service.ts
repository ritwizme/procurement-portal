import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetInventoryBySellerService {

  constructor(private http: HttpClient) { }

  url:string='http://localhost:8080/inventory/getBySellerId'

  getInventoryBySellerId(sellerId){
    return this.http.get(this.url,{
      params:{
        sellerId
      }
    })
  }

}
