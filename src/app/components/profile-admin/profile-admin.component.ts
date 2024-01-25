import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-admin',
  templateUrl: './profile-admin.component.html',
  styleUrls: ['./profile-admin.component.scss'],
})
export class ProfileAdminComponent implements OnInit {
  updateAdminProfileForm!: FormGroup;

  constructor(
    private profileService: ProfileService,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    // Initialize the form with validators if needed
    this.updateAdminProfileForm = this.fb.group({
      l_name: ['', Validators.required],
      f_name: ['', Validators.required],
      username: [''],
      password: [''],
      email: ['', Validators.email],
      phone: [''],
      city: [''],
    });
  }

  updateAdminProfile() {
    if (this.updateAdminProfileForm.valid) {
      this.profileService.updateProfile(this.updateAdminProfileForm.value);
      this.updateAdminProfileForm.reset();
    } else {
      alert('All field required');
    }
  }
}
