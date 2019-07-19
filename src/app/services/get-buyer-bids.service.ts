import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetBuyerBidsService {
 
  constructor(private http: HttpClient) { }
  url:string='http://localhost:8080/bidding/getByBuyerId'

  getByBuyerId(buyerId){
    return this.http.get(this.url,{
      params:{
        buyerId
      }
    })
  }

}
