import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationManagement } from '../api/authentication.api';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private authenticationClient: AuthenticationManagement,
      private router: Router,
  ) {}
  public login(username: string, password: string): void {
    this.authenticationClient.login(username, password).subscribe({
      next: (response) => {
      
         // Check if the role is "ROLE_EMPLOYEE" and navigate to the dashboard
         
         if (response.role === 'ROLE_EMPLOYEE') {
          localStorage.setItem("token", response.token);
          localStorage.setItem("role", response.role);
  
          this.router.navigate(['dashboard-employee']);
          
        }else if(response.role === 'ROLE_ADMIN'){
          localStorage.setItem("token", response.token);
          localStorage.setItem("role", response.role);
  
          this.router.navigate(['dashboard-admin']);
        }else{
          alert("Login Failed")
        }

      },
      error: (error) => {
        console.error("Error during login:", error);
        alert("Login Failed")
      }
    });
  }

  public logout() {
    localStorage.removeItem("token");
    this.router.navigate(['/login']);
  }

  public isLoggedIn(): boolean {
    console.log(localStorage.getItem("token"));
    if (localStorage.getItem("token") != null) return true;
    return false;
  }

  public getToken(): string | null {
    return this.isLoggedIn() ? localStorage.getItem("token") : null;
  }

  public getRole(): string | null {
    return this.isLoggedIn() ? localStorage.getItem("role") : null;
  }
}
