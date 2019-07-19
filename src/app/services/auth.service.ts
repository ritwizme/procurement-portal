import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Buyer } from '../models/buyerDetails.model'
@Injectable({
  providedIn: 'root'
})



export class AuthenticationService {
private loginUrl:string;
byerData:any=[]
 constructor(private http:HttpClient){
  this.loginUrl='http://localhost:8080/buyer/login';
 } 


buyerLogin=false

authenticate(emailId, password){
return this.http.get(this.loginUrl,{
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

/*
  constructor() { }

  authenticate(username, password) {

    
    if (username === "javainuse" && password === "password") {
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }

  */
}