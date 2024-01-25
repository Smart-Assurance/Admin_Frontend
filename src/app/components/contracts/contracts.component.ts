import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContractService } from 'src/app/services/contract.service';
import { ShowContractModalComponent } from '../show-contract-modal/show-contract-modal.component';
import { UpdateContractModalComponent } from '../update-contract-modal/update-contract-modal.component';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent {
  contracts: any[] = [];
  isModalOpen = false;

  constructor(private contractService: ContractService,private modalService: NgbModal) {}

  ngOnInit(): void {
    // Subscribe to the clients$ observable to get updates
    this.contractService.contracts$.subscribe((data) => {
      this.contracts = data;
    });

    // Trigger the API call to get clients
    this.contractService.getAll();    
  }

  
  deleteContract(contractId:string){
    this.contractService.deleteContract(contractId);
  }

  openContractDetailModal(contract: any): void {
    const modalRef = this.modalService.open(ShowContractModalComponent, { centered: true, size: 'lg' });
    modalRef.componentInstance.contract = contract; // Pass the selected client to the modal
  }

  updateState(contractId: any) : void{
    this.contractService.updateState(contractId);

  }

  toggleModal(){
    this.isModalOpen = !this.isModalOpen;    
  }

  openModal(content: any) {
    this.modalService.open(content, { centered: true, size: 'lg' }); // Adjust size and options as needed
  }

  openUpdateContractModal(contract: any): void {
    const modalRef = this.modalService.open(UpdateContractModalComponent, { centered: true, size: 'lg' });
    modalRef.componentInstance.contract = contract; // Pass the selected client to the modal
  }

}
