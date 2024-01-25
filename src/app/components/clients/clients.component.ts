// clients.component.ts

import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ShowClientModalComponent } from '../show-client-modal/show-client-modal.component';
import { UpdateClientModalComponent } from '../update-client-modal/update-client-modal.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  clients: any[] = [];
  isModalOpen = false;

  constructor(private clientService: ClientService,private modalService: NgbModal) {}

  ngOnInit(): void {
    // Subscribe to the clients$ observable to get updates
    this.clientService.clients$.subscribe((data) => {
      this.clients = data;
    });

    // Trigger the API call to get clients
    this.clientService.getAll();    
  }

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;    
  }

  openClientDetailModal(client: any): void {
    const modalRef = this.modalService.open(ShowClientModalComponent, { centered: true, size: 'lg' });
    modalRef.componentInstance.client = client; // Pass the selected client to the modal
  }

  openUpdateClientModal(client: any): void {
    const modalRef = this.modalService.open(UpdateClientModalComponent, { centered: true, size: 'lg' });
    modalRef.componentInstance.client = client; // Pass the selected client to the modal
  }

  openModal(content: any) {
    this.modalService.open(content, { centered: true, size: 'lg' }); // Adjust size and options as needed
  }

  deleteClient(clientId:string){
    this.clientService.deleteClient(clientId);
  }
}
