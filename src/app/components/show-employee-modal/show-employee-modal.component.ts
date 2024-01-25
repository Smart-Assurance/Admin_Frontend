import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-show-employee-modal',
  templateUrl: './show-employee-modal.component.html',
  styleUrls: ['./show-employee-modal.component.scss']
})
export class ShowEmployeeModalComponent {
  @Input() employee: any;

  constructor(public activeModal: NgbActiveModal) {}
}
