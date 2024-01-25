import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeService } from 'src/app/services/employee.service';
import { ShowEmployeeModalComponent } from '../show-employee-modal/show-employee-modal.component';
import { UpdateEmployeeModalComponent } from '../update-employee-modal/update-employee-modal.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees: any[] = [];
  isModalOpen = false;

  constructor(private employeeService: EmployeeService,private modalService: NgbModal) {}

  ngOnInit(): void {
    // Subscribe to the clients$ observable to get updates
    this.employeeService.employees$.subscribe((data) => {
      this.employees = data;
    });

    // Trigger the API call to get clients
    this.employeeService.getAll();    
  }

  openEmployeeDetailModal(employee: any): void {
    const modalRef = this.modalService.open(ShowEmployeeModalComponent, { centered: true, size: 'lg' });
    modalRef.componentInstance.employee = employee; // Pass the selected client to the modal
  }

  openUpdateEmployeeModal(employee: any): void {
    const modalRef = this.modalService.open(UpdateEmployeeModalComponent, { centered: true, size: 'lg' });
    modalRef.componentInstance.employee = employee; // Pass the selected client to the modal
  }

  openModal(content: any) {
    this.modalService.open(content, { centered: true, size: 'lg' }); // Adjust size and options as needed
  }

  deleteEmployee(examinaterId:string){
    this.employeeService.deleteEmployee(examinaterId);
  }

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;    
  }
}
