import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Bidding } from '../models/bidding.model'

@Injectable({
  providedIn: 'root'
})
export class BiddingService {
  biddingUrl = 'http://localhost:8080/bidding/getAll';
  constructor(private http:HttpClient) { }

  getBidding():Observable<Bidding[]>{
    return this.http.get<Bidding[]>(this.biddingUrl);
  }

}
