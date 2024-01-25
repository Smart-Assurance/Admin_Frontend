import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ExaminaterService } from 'src/app/services/examinater.service';

@Component({
  selector: 'app-update-examinater-modal',
  templateUrl: './update-examinater-modal.component.html',
  styleUrls: ['./update-examinater-modal.component.scss']
})
export class UpdateExaminaterModalComponent {
  @Input() examinater: any;
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
  updateExaminaterForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    public activeModal: NgbActiveModal,
    private examinaterService: ExaminaterService
  ) {
    
    this.updateExaminaterForm = this.fb.group({
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

  updateExaminater() {
    
    if (this.updateExaminaterForm?.valid) {
      this.examinaterService.updateExaminater(
        this.examinater.id,
        this.updateExaminaterForm.value
      );
      this.activeModal.dismiss()
      this.updateExaminaterForm.reset()
    }else{
      alert("All field required")
    }
  }
}
