import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReportManagement {
  constructor(private http: HttpClient) {}
  public getAll(): Observable<any> {
    return this.http.get<any>(environment.apiUrlReport + '/reports/getAll');
  }
  public updateStatus(reportId: string): Observable<any> {
    return this.http.get<any>(environment.apiUrlReport + '/reports/'+reportId);
  }
}