import { Injectable } from '@angular/core';
import { ClientManagement } from '../api/client.api';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private clientsSubject = new BehaviorSubject<any[]>([]);
  clients$ = this.clientsSubject.asObservable();

  constructor(
    private clientManagement: ClientManagement,
    private router: Router,
  ) {}

  public getAll(): void {
    this.clientManagement.getAll().subscribe({
      next: (response) => {
        // Store the retrieved clients in the BehaviorSubject
        this.clientsSubject.next(response);
      },
      error: (error) => {
        console.error("Error during get all:", error);
      }
    });
  }

  public addClient(clientData: any): void {
    this.clientManagement.addClient(clientData).subscribe({
      next: (response) => {
        console.log("Client created successfully:", response);
        this.getAll();
      },
      error: (error) => {
        console.error("Error during client creation:", error);
      }
    });
  }

  public deleteClient(clientId: string): void {
    this.clientManagement.deleteClient(clientId).subscribe({
      next: (response) => {
        console.log("Client deleted successfully:", response);
        this.getAll();
      },
      error: (error) => {
        console.error("Error during client creation:", error);
      }
    });
  }

  public updateClient(clientId: string,newClientData: any): void {
    this.clientManagement.updateClient(clientId,newClientData).subscribe({
      next: (response) => {
        console.log("Client updated successfully:", response);
        this.getAll();
      },
      error: (error) => {
        console.error("Error during client creation:", error);
      }
    });
  }
}
