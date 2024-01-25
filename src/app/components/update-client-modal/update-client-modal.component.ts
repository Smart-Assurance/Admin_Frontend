import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-update-client-modal',
  templateUrl: './update-client-modal.component.html',
  styleUrls: ['./update-client-modal.component.scss']
})
export class UpdateClientModalComponent {
  @Input() client: any;
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
  updateClientForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    public activeModal: NgbActiveModal,
    private clientService: ClientService
  ) {
    
    this.updateClientForm = this.fb.group({
      l_name: ['', Validators.required],
      f_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      city: [''],
      address: ['', Validators.required],
      cin: ['', Validators.required],
      date_of_birth: ['', Validators.required],
      add_wallet_cli: [''],
    });
  }

  updateClient() {
    
    if (this.updateClientForm?.valid) {
      this.clientService.updateClient(
        this.client.id,
        this.updateClientForm.value
      );
      this.activeModal.dismiss()
      this.updateClientForm.reset()
    }else{
      alert("All field required")
    }
  }
}
