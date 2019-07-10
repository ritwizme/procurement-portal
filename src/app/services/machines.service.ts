import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Machines } from '../models/machines.model';

@Injectable({
  providedIn: 'root'
})
export class MachinesService {

  machineUrl:string = 'http://localhost:8080/machines/all';
  constructor(private http:HttpClient) { }

  getMachines():Observable<Machines[]>{
    return this.http.get<Machines[]>(this.machineUrl)
  }
}


