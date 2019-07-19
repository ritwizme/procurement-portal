
import { Component, OnInit,  } from '@angular/core';
import { Router } from '@angular/router';
import { SellerAuthService } from '../../services/seller-auth.service';

import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http'
import { SellerRegistrationService } from '../../services/seller-registration.service'

@Component({
  selector: 'app-vendor-login',
  templateUrl: './vendor-login.component.html',
  styleUrls: ['./vendor-login.component.css']
})
export class VendorLoginComponent {
  username:""
  password:""
  companyName:""
  registrationNumber:""
  gstNumber:""
  supervisor:""
  contact:""
  address:""
  emailId:""
  regpassword:""
  invalidLogin = false
  loginError = false
  message:"wrong credentials"
  vendorLoggedIn=false
  constructor(private router: Router,private login:SellerAuthService,private http:HttpClient,private sellerReg:SellerRegistrationService){
    
  }

 
  register(){
    this.sellerReg.register(this.companyName,this.registrationNumber,this.gstNumber,this.supervisor,this.contact,this.address,this.emailId,this.regpassword).subscribe(regdata=>{
      console.log()
      this.router.navigate(['login'])
    })

  }
  

  checkLogin(){
    this.login.authenticate(this.username,this.password).subscribe(data=>{
      if(data!=null){
        this.login.sellerData=data;
        this.router.navigate(['index'])
        this.invalidLogin = false
        this.vendorLoggedIn = true
        sessionStorage.setItem('username',this.username)
        localStorage.setItem("sellerData", JSON.stringify(data))
        console.log(this.login.sellerData)
 
      }
      else{
        this.invalidLogin = true
        this.loginError = true

      }
    });
  }





  /*
  username = 'javainuse'
  password = ''
  invalidLogin = false

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)
    ) {
      this.router.navigate(['index'])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }
*/
}