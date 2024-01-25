import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ContractManagement } from '../api/contracts.api';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  private contractSubject = new BehaviorSubject<any[]>([]);
  contracts$ = this.contractSubject.asObservable();

  constructor(
    private contractManagemnet: ContractManagement,
    private router: Router,
  ) {}

  public getAll(): void {
    this.contractManagemnet.getAll().subscribe({
      next: (response) => {
        this.contractSubject.next(response);
      },
      error: (error) => {
        console.error("Error during get all:", error);
      }
    });
  }

  public addContract(contractData: any): void {
    this.contractManagemnet.addContract(contractData).subscribe({
      next: (response) => {
        console.log("Contract created successfully:", response);
        this.getAll();
      },
      error: (error) => {
        console.error("Error:", error);
      }
    });
  }

  public deleteContract(contractId: string): void {
    this.contractManagemnet.deleteContract(contractId).subscribe({
      next: (response) => {
        console.log("Contract deleted successfully:", response);
        this.getAll();
      },
      error: (error) => {
        console.error("Error:", error);
      }
    });
  }

  public updateContract(contractId: string,newContractData: any): void {
    this.contractManagemnet.updateContract(contractId,newContractData).subscribe({
      next: (response) => {
        console.log("Contract updated successfully:", response);
        this.getAll();
      },
      error: (error) => {
        console.error("Error:", error);
      }
    });
  }

  public updateState(contractId: string): void {
    this.contractManagemnet.updateState(contractId).subscribe({
      next: (response) => {
        console.log("Contract updated successfully:", response);
        this.getAll();
      },
      error: (error) => {
        console.error("Error:", error);
      }
    });
  }
}
