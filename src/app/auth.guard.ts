//Aurthor Ravindra yadav
//Start
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})


export class AuthGuard implements CanActivate {


  constructor(private authService: AuthService, private router: Router) {}


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.authService.isAuthenticatedUser()) {
      this.router.navigate(['/login']);
      return false;
    }
    if (route.data['permission']) {
      if (!this.authService.hasPermission(route.data['permission'])) {
        this.router.navigate(['/forbidden']); 
        return false;
      }
      if (!this.authService.isAuthenticatedEmployer()) {
        this.router.navigate(['/employerslogin']);
        return false;
     
    }
  
  
    }
    return true;
  }
}
//End