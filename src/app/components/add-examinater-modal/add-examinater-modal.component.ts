import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ExaminaterService } from 'src/app/services/examinater.service';

@Component({
  selector: 'app-add-examinater-modal',
  templateUrl: './add-examinater-modal.component.html',
  styleUrls: ['./add-examinater-modal.component.scss'],
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
export class AddExaminaterModalComponent {
  @Input() showModal: boolean | undefined;
  @Output() toggleModal = new EventEmitter<boolean>();
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
  isModalOpen = false;

  toggleRegisterModal() {
    this.isModalOpen = !this.isModalOpen;
    this.showModal=false
  }


  addExaminaterForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private examinaterService: ExaminaterService
  ) {
    this.addExaminaterForm = this.fb.group({
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

  addExaminater() {
    if (this.addExaminaterForm?.valid) {
      this.examinaterService.addExaminater(
        this.addExaminaterForm.value
      );
      this.toggle()
      this.addExaminaterForm.reset()
    }else{
      alert("All field required")
    }
  }
}
