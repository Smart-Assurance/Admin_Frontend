import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log(this.authService.getRole());
    
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
    else if(this.authService.getRole()==="ROLE_EMPLOYEE"){
      this.router.navigate(['/employee/dashboard']);
    }

    return true;
  }
  
}
