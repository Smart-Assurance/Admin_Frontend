import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee-modal',
  templateUrl: './add-employee-modal.component.html',
  styleUrls: ['./add-employee-modal.component.scss'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          transform: 'scale(1)',
          opacity: 1,
        })
      ),
      state(
        'close',
        style({
          transform: 'scale(0)',
          opacity: 0,
        })
      ),
      transition('open => close', [animate('0.25s ease-in')]),
      transition('close => open', [animate('0.25s ease-out')]),
    ]),
  ],
})
export class AddEmployeeModalComponent {
  @Input() showModal: boolean | undefined;
  @Output() toggleModal = new EventEmitter<boolean>();
  addEmployeeForm!: FormGroup;
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
  isModalOpen = false
  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private employeeService: EmployeeService
  ) {
    this.addEmployeeForm = this.fb.group({
      l_name: ['', Validators.required],
      f_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      city: ['Tangier'],
      address: ['', Validators.required],
      cin: ['', Validators.required],
      date_of_birth: ['', Validators.required],
    });

  }

  
  openModal(content: any) {
    this.modalService.open(content, { centered: true, size: 'lg' }); // Adjust size and options as needed
  }


  toggle() {
    this.toggleModal.emit();
  }

  addEmployee() {
    if (this.addEmployeeForm?.valid) {
      this.employeeService.addEmployee(
        this.addEmployeeForm.value
      );
      this.toggle()
      this.addEmployeeForm.reset()
    }else{
      alert("All field required")
    }
  }
}
