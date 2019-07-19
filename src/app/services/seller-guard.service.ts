import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from './auth.service';
import { CheckRoleService } from './check-role.service'
@Injectable({
  providedIn: 'root'
})
export class SellerGuardService {

  constructor(private router: Router,
  private authService: AuthenticationService, 
  private roleCheck: CheckRoleService) { }



  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.roleCheck.isSellerLoggedIn())
      return true;
    else{
      this.router.navigate(['login']);
      return false;
    }


  }
}