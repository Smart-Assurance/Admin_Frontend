import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientManagement {
  constructor(private http: HttpClient) {}
  
  public getAll(): Observable<any> {
    return this.http.get<any>(environment.apiUrlClient + '/clients/getAll');
  }

  public addClient(clientData: any): Observable<any> {
    return this.http.post<any>(environment.apiUrlClient + '/clients/add', clientData);
  }

  public deleteClient(clientId: string): Observable<any> {
    return this.http.delete<any>(environment.apiUrlClient + '/clients/'+clientId);
  }

  public updateClient(clientId: string,newClientData: any): Observable<any> {
    return this.http.put<any>(environment.apiUrlClient + '/clients/'+clientId,newClientData);
  }

}