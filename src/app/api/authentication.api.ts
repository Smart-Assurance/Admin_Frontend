import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationManagement {
  constructor(private http: HttpClient) {}
  public login(username: string, password: string): Observable<any> {
    return this.http.post<any>(environment.apiUrlAuth + '/auth/login', {
      username: username,
      password: password,
    });
  }
}
