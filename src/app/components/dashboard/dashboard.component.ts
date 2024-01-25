import { Component } from '@angular/core';
import { CarInsuranceContractService } from 'src/app/services/car-insurance-contract.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private carInsuranceService: CarInsuranceContractService) { }

  transactionHistory: any[] = [];
  clientAddress: string = '';

  async getTransactionHistory(): Promise<void> {
    try {
      if (this.clientAddress) {
        this.transactionHistory = await this.carInsuranceService.getTransactionHistory(this.clientAddress);

        console.log('Transaction History:', this.transactionHistory);
      } else {
        console.warn('Please provide a valid client address.');
      }
    } catch (error) {
      console.error('Error fetching transaction history:', error);
    }
  }

  getFormattedDate(timestamp: number | null): string {
    if (timestamp) {
      const date = new Date(timestamp * 1000);
      return date.toLocaleString();
    } else {
      return 'Timestamp not available';
    }
  }
}
