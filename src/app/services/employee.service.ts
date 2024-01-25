import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EmployeeManagement } from '../api/employee.api';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeesSubject = new BehaviorSubject<any[]>([]);
  employees$ = this.employeesSubject.asObservable();

  constructor(
    private employeeManagement: EmployeeManagement,
    private router: Router,
  ) {}

  public getAll(): void {
    this.employeeManagement.getAll().subscribe({
      next: (response) => {
        // Store the retrieved clients in the BehaviorSubject
        this.employeesSubject.next(response);
      },
      error: (error) => {
        console.error("Error during get all:", error);
      }
    });
  }

  public addEmployee(employeeData: any): void {
    this.employeeManagement.addEmployee(employeeData).subscribe({
      next: (response) => {
        console.log("Employee created successfully:", response);
        this.getAll();
      },
      error: (error) => {
        console.error("Error:", error);
      }
    });
  }

  public deleteEmployee(examinaterId: string): void {
    this.employeeManagement.deleteEmployee(examinaterId).subscribe({
      next: (response) => {
        console.log("Employee deleted successfully:", response);
        this.getAll();
      },
      error: (error) => {
        console.error("Error:", error);
      }
    });
  }

  public updateEmployee(employeeId: string,newEmployeeData: any): void {
    this.employeeManagement.updateEmployee(employeeId,newEmployeeData).subscribe({
      next: (response) => {
        console.log("Employee updated successfully:", response);
        this.getAll();
      },
      error: (error) => {
        console.error("Error:", error);
      }
    });
  }
}
