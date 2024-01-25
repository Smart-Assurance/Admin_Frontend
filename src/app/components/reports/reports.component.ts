import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReportService } from 'src/app/services/report.service';
import { ShowReportModalComponent } from '../show-report-modal/show-report-modal.component';
import { TransactionReportModalComponent } from '../transaction-report-modal/transaction-report-modal.component';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  reports: any[] = [];

  constructor(private reportService: ReportService,private modalService: NgbModal) {}

  ngOnInit(): void {
    // Subscribe to the clients$ observable to get updates
    this.reportService.reports$.subscribe((data) => {
      this.reports = data;
    });

    
    // Trigger the API call to get 
    this.reportService.getAll();    
  }

  openReportDetailModal(report: any): void {
    const modalRef = this.modalService.open(ShowReportModalComponent, { centered: true, size: 'lg' });
    modalRef.componentInstance.report = report; // Pass the selected client to the modal
  }

  openReportTransactionModal(ownerWallet: any,reportId: any): void {
    
    const modalRef = this.modalService.open(TransactionReportModalComponent, { centered: true, size: 'lg' });
    modalRef.componentInstance.ownerWallet = ownerWallet; // Pass the selected client to the modal
    modalRef.componentInstance.reportId = reportId; 

  }
}
