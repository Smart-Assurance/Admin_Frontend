import { Injectable } from '@angular/core';
import { ProfileManagement } from '../api/profile.api';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private profileManagement: ProfileManagement,
    private router: Router,
  ) {}


  public updateProfile(newData: any): void {
    this.profileManagement.updateProfile(newData).subscribe({
      next: (response) => {
        console.log("Admin updated successfully:", response);
        alert("Profile updated successfully")
        this.router.navigate(['dashboard-admin']);
      },
      error: (error) => {
        console.error("Error:", error);
      }
    });
  }
}
