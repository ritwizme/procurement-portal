import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/auth.service';
import { Buyer } from '../../models/buyerDetails.model'
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http'
import { BuyerRegisterationService } from '../../services/buyer-registeration.service'

@Component({
  selector: 'app-login',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginComponent{
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
  buyerLoggeddin = false
  loginError = false
  message:"wrong credentials"
  isBuyerLoggedIn=false
  constructor(private router: Router,private login:AuthenticationService,private http:HttpClient,private buyerReg:BuyerRegisterationService){
    
  }

 
  register(){
    this.buyerReg.register(this.companyName,this.registrationNumber,this.gstNumber,this.supervisor,this.contact,this.address,this.emailId,this.regpassword).subscribe(regdata=>{
      console.log()
      this.router.navigate(['login'])
    })

  }

  checkLogin(){
    this.login.authenticate(this.username,this.password).subscribe(data=>{
      if(data!=null){
        this.login.byerData=data;
        this.router.navigate(['index'])
        this.invalidLogin = false
        sessionStorage.setItem('username',this.username)
        this.buyerLoggeddin = true
        console.log(this.login.byerData.companyName)
        console.log(this.username)
        console.log(this.login.byerData.role)
        if(this.login.byerData.role=="Buyer")
        this.isBuyerLoggedIn==true
        localStorage.setItem("buyerData", JSON.stringify(data))
        console.log(localStorage.getItem("buyerData"))
      }
      else{
        this.invalidLogin = true
        this.loginError = true

      }
    });
  }

  ngOnInit() {
  }



  /*
  username = 'javainuse'
  password = ''
  invalidLogin = false

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }



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