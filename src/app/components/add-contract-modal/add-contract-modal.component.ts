import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContractService } from 'src/app/services/contract.service';

@Component({
  selector: 'app-add-contract-modal',
  templateUrl: './add-contract-modal.component.html',
  styleUrls: ['./add-contract-modal.component.scss'],
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
export class AddContractModalComponent implements OnInit{
  @Input() showModal: boolean | undefined;
  @Output() toggleModal = new EventEmitter<boolean>();
  addContractForm!: FormGroup;
  constructor(private fb: FormBuilder,private contractService: ContractService) {}
  ngOnInit(): void {
    this.addContractForm = this.fb.group({
      name: ['', Validators.required],
      price: [0, Validators.required],
      options: [''],
      description: ['']
    });
  }

  toggle() {
    this.toggleModal.emit();
  }

  addContract() {
    // Split options by comma and trim each value
  const optionsArray = this.addContractForm.value.options
  .split(',')
  .map((option: string) => option.trim());

// Create a new contract object
const newContract = {
  name: this.addContractForm.value.name,
  price: this.addContractForm.value.price,
  options: optionsArray,
  description: this.addContractForm.value.description
};

this.contractService.addContract(newContract)

this.addContractForm.reset();
this.toggle();
  }

}
