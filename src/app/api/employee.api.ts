import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeManagement {
  constructor(private http: HttpClient) {}
  public getAll(): Observable<any> {
    return this.http.get<any>(environment.apiUrlEmployee + '/employees/getAll');
  }
  public addEmployee(employeeData: any): Observable<any> {
    return this.http.post<any>(environment.apiUrlEmployee + '/employees/add', employeeData);
  }

  public deleteEmployee(employeeId: string): Observable<any> {
    return this.http.delete<any>(environment.apiUrlEmployee + '/employees/'+employeeId);
  }

  public updateEmployee(employeeId: string,newEmployeeData: any): Observable<any> {
    return this.http.put<any>(environment.apiUrlEmployee + '/employees/'+employeeId,newEmployeeData);
  }
}