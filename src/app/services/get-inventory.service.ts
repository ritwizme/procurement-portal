import { Injectable } from '@angular/core';
import { Inventory } from '../models/inventory.model'
import { HttpClient, HttpHeaders,HttpClientModule  } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class GetInventoryService {
  inventoryUrl:string = 'http://localhost:8080/inventory/getAll'

  constructor(private http:HttpClient) { }

  getInventory():Observable<Inventory[]>{
    return this.http.get<Inventory[]>(this.inventoryUrl)
  }
}
