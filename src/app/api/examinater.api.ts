import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExaminaterManagement {
  constructor(private http: HttpClient) {}
  public getAll(): Observable<any> {
    return this.http.get<any>(environment.apiUrlExaminater + '/examinaters/getAll');
  }
  public addExaminater(examinaterData: any): Observable<any> {
    return this.http.post<any>(environment.apiUrlExaminater + '/examinaters/add', examinaterData);
  }

  public deleteExaminater(examinaterId: string): Observable<any> {
    return this.http.delete<any>(environment.apiUrlExaminater + '/examinaters/'+examinaterId);
  }

  public updateExaminater(examinaterId: string,newExaminaterData: any): Observable<any> {
    return this.http.put<any>(environment.apiUrlExaminater + '/examinaters/'+examinaterId,newExaminaterData);
  }
}