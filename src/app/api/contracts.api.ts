import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContractManagement {
  constructor(private http: HttpClient) {}
  
  public getAll(): Observable<any> {
    return this.http.get<any>(environment.apiUrlContract + '/contracts/getAll');
  }

  public addContract(contractData: any): Observable<any> {
    return this.http.post<any>(environment.apiUrlContract + '/contracts/add', contractData);
  }

  public deleteContract(contractId: string): Observable<any> {
    return this.http.delete<any>(environment.apiUrlContract + '/contracts/'+contractId);
  }

  public updateContract(contractId: string,newContractData: any): Observable<any> {
    return this.http.put<any>(environment.apiUrlContract + '/contracts/'+contractId,newContractData);
  }

  public updateState(contractId: string): Observable<any> {
    return this.http.put<any>(environment.apiUrlContract + '/contracts/state/'+contractId,{});
  }

}