import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ExaminaterManagement } from '../api/examinater.api';

@Injectable({
  providedIn: 'root'
})
export class ExaminaterService {
  private examinatersSubject = new BehaviorSubject<any[]>([]);
  examinaters$ = this.examinatersSubject.asObservable();

  constructor(
    private examinaterManagement: ExaminaterManagement,
    private router: Router,
  ) {}

  public getAll(): void {
    this.examinaterManagement.getAll().subscribe({
      next: (response) => {
        // Store the retrieved clients in the BehaviorSubject
        this.examinatersSubject.next(response);
      },
      error: (error) => {
        console.error("Error during get all:", error);
      }
    });
  }

  public addExaminater(examinaterData: any): void {
    this.examinaterManagement.addExaminater(examinaterData).subscribe({
      next: (response) => {
        console.log("Examinater created successfully:", response);
        this.getAll();
      },
      error: (error) => {
        console.error("Error:", error);
      }
    });
  }

  public deleteExaminater(examinaterId: string): void {
    this.examinaterManagement.deleteExaminater(examinaterId).subscribe({
      next: (response) => {
        console.log("Examinater deleted successfully:", response);
        this.getAll();
      },
      error: (error) => {
        console.error("Error:", error);
      }
    });
  }

  public updateExaminater(clientId: string,newExaminaterData: any): void {
    this.examinaterManagement.updateExaminater(clientId,newExaminaterData).subscribe({
      next: (response) => {
        console.log("Examinater updated successfully:", response);
        this.getAll();
      },
      error: (error) => {
        console.error("Error:", error);
      }
    });
  }
}
