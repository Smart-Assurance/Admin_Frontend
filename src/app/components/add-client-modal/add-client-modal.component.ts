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
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-add-client-modal',
  templateUrl: './add-client-modal.component.html',
  styleUrls: ['./add-client-modal.component.scss'],
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
export class AddClientModalComponent {
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



  addClientForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private clientService: ClientService
  ) {
    this.addClientForm = this.fb.group({
      l_name: ['', Validators.required],
      f_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      city: ['Tangier'],
      address: ['', Validators.required],
      cin: ['', Validators.required],
      date_of_birth: ['', Validators.required],
      add_wallet_cli: [''],
    });

  }

  

  toggle() {
    this.toggleModal.emit();
  }

  addClient() {
    if (this.addClientForm?.valid) {
      this.clientService.addClient(
        this.addClientForm.value
      );
      this.toggle()
      this.addClientForm.reset()
    }else{
      alert("All field required")
    }
  }
}
