import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CarInsuranceContractService } from 'src/app/services/car-insurance-contract.service';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-transaction-report-modal',
  templateUrl: './transaction-report-modal.component.html',
  styleUrls: ['./transaction-report-modal.component.scss']
})
export class TransactionReportModalComponent {
  @Input() ownerWallet: string | undefined; // Input to get the owner's @ wallet
  @Input() agenceWallet: string | undefined; // Input to get the owner's @ wallet
  @Input() reportId: string | undefined;
  insurancePrice!: number; // Input to get the price to pay for insurance

  constructor(public activeModal: NgbActiveModal, public reportService: ReportService, private carInsuranceService: CarInsuranceContractService) {
    this.insurancePrice = 0.1;
   }


  async makeTransaction(): Promise<void> {
    try {
      if (this.ownerWallet && this.agenceWallet && this.insurancePrice > 0) {
        await this.carInsuranceService.sendAmountToClient(this.agenceWallet, this.ownerWallet, this.insurancePrice);
        this.ownerWallet = '';
        this.agenceWallet = ''; // Clear the agency address as well if needed
        this.insurancePrice = 0;
  
        this.reportService.updateStatus(this.reportId ?? "");
        console.log(`Transaction successful for ${this.insurancePrice}$`);
        this.activeModal.dismiss(); // Close the modal after making the transaction
      } else {
        let errorMessage = 'Please provide:';
        if (!this.ownerWallet) errorMessage += ' a valid client address,';
        if (!this.agenceWallet) errorMessage += ' a valid agency address,';
        if (!(this.insurancePrice > 0)) errorMessage += ' a valid amount to send,';
  
        console.warn(errorMessage.slice(0, -1)); // Remove the trailing comma
      }
    } catch (error) {
      console.error('Error sending amount to client:', error);
    }
  }
  
}
