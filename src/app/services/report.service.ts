import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ReportManagement } from '../api/report.api';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private reportsSubject = new BehaviorSubject<any[]>([]);
  reports$ = this.reportsSubject.asObservable();

  constructor(
    private reportManagement: ReportManagement,
    private router: Router,
  ) {}

  public getAll(): void {
    this.reportManagement.getAll().subscribe({
      next: (response) => {
        // Store the retrieved clients in the BehaviorSubject
        this.reportsSubject.next(response);
      },
      error: (error) => {
        console.error("Error during get all:", error);
      }
    });
  }


  public updateStatus(reportId: string): void {
    this.reportManagement.updateStatus(reportId).subscribe({
      next: (response) => {
        console.log("Report updated successfully:", response);
        this.getAll();
      },
      error: (error) => {
        console.error("Error during update :", error);
      }
    });
  }

  public addReport(reportInfo: any): void {
    this.reportManagement.addReport(reportInfo).subscribe({
      next: () => {
        alert("Report added successfully");
        this.getAll();
      },
      error: (error) => {
        console.error("Error during insert :", error);
      }
    });
  }
}
