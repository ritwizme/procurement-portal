import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SellerAuthService {
private sellerLoginUrl:string;
sellerData:any=[]
  constructor(private http:HttpClient) {
    this.sellerLoginUrl='http://localhost:8080/seller/login'
  }

  authenticate(emailId, password){
    return this.http.get(this.sellerLoginUrl,{
      params:{
        emailId:emailId,
        password:password
      }
    })

}
isUserLoggedIn() {
  let user = sessionStorage.getItem('username')
  console.log(!(user === null))
  return !(user === null)
}
logOut() {
  sessionStorage.removeItem('username')
}
}