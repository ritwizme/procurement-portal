import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcceptBiddingService {

  constructor(private http: HttpClient) { }
  url:string='http://localhost:8080/bidding/update'

  acceptBidding(biddingId,sellerId, sellerCompany, dateAccepted){
    return this.http.get(this.url,{
      params:{
        biddingId,sellerId, sellerCompany, dateAccepted
      }
    })

  }
}
