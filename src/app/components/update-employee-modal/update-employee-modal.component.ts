import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-update-employee-modal',
  templateUrl: './update-employee-modal.component.html',
  styleUrls: ['./update-employee-modal.component.scss']
})
export class UpdateEmployeeModalComponent {
  @Input() employee: any;
  cities: string[] = [
    'Casablanca',
    'Rabat',
    'Marrakech',
    'Fes',
    'Tangier',
    'Agadir',
    'Kenitra',
    'Oujda',
    'Tetouan',
    'El Jadida',
    'Taza',
    'Khouribga',
    'Meknes',
    'Sale',
    'Nador',
    'Beni Mellal',
    'Ouarzazate',
    'Al Hoceima',
    'Settat',
    'Mohammedia',
    'Larache',
    'Khémisset',
    'Taourirt',
    'Errachidia',
    'Taroudant',
    'Safi',
    'Guelmim',
    'Ksar El Kebir',
    'Tiznit',
  ];
  updateEmployeeForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    public activeModal: NgbActiveModal,
    private employeeService: EmployeeService
  ) {
    
    this.updateEmployeeForm = this.fb.group({
      l_name: ['', Validators.required],
      f_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      city: [''],
      address: ['', Validators.required],
      cin: ['', Validators.required],
      date_of_birth: ['', Validators.required],
    });
  }

  updateEmployee() {
    
    if (this.updateEmployeeForm?.valid) {
      this.employeeService.updateEmployee(
        this.employee.id,
        this.updateEmployeeForm.value
      );
      this.activeModal.dismiss()
      this.updateEmployeeForm.reset()
    }else{
      alert("All field required")
    }
  }
}
