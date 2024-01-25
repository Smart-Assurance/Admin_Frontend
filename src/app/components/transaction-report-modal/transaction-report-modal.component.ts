import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-transaction-report-modal',
  templateUrl: './transaction-report-modal.component.html',
  styleUrls: ['./transaction-report-modal.component.scss']
})
export class TransactionReportModalComponent {
  @Input() ownerWallet: string | undefined; // Input to get the owner's @ wallet
  @Input() reportId: string | undefined; 
  insurancePrice: number | undefined; // Input to get the price to pay for insurance

  constructor(public activeModal: NgbActiveModal,public reportService:ReportService) {}

  makeTransaction() {
    this.reportService.updateStatus(this.reportId??"");
    console.log(`Making transaction for ${this.insurancePrice}$`);
    this.activeModal.dismiss(); // Close the modal after making the transaction
  }
}
