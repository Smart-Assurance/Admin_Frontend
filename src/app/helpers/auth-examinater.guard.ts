import { AuthenticationService } from '../services/authentication.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthExaminaterGuard implements CanActivate {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
    }else if(this.authService.getRole()==="ROLE_ADMIN"){
      this.router.navigate(['/dashboard-admin']);
    }else if (this.authService.getRole()==="ROLE_EMPLOYEE"){
      this.router.navigate(['/dashboard-employee']);
    }

    return true;
  }
}