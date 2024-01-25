import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ContractService } from 'src/app/services/contract.service';

@Component({
  selector: 'app-update-contract-modal',
  templateUrl: './update-contract-modal.component.html',
  styleUrls: ['./update-contract-modal.component.scss']
})
export class UpdateContractModalComponent {
  updateContractForm: FormGroup;
  @Input() contract: any;

  constructor(
    private fb: FormBuilder,
    public activeModal: NgbActiveModal,
    private contractService: ContractService
  ) {
    
    this.updateContractForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      options: [''],
    });
  }

  updateOptions(optionsString: string) {
    // Split the comma-separated string into an array and trim each value
    const optionsArray = optionsString.split(',').map(option => option.trim());
    // Update the form control value with the array
    this.updateContractForm.patchValue({ options: optionsArray });
}
  updateContract() {
  
    
    if (this.updateContractForm?.valid) {
  
    
      this.contractService.updateContract(
        this.contract.id,
        this.updateContractForm.value
      );
      this.activeModal.dismiss()
      this.updateContractForm.reset()
    }else{
      alert("All field required")
    }
  }
}
