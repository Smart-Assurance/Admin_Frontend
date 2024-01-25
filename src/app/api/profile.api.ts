import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileManagement {
  constructor(private http: HttpClient) {}

  public updateProfile(updateProfile: any): Observable<any> {
    return this.http.put<any>(environment.apiUrlProfile + '/profiles/admin/65b2425678bbaf1d76b76101',updateProfile);
  } 
}