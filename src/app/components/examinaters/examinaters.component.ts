import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ExaminaterService } from 'src/app/services/examinater.service';
import { ShowExaminaterModalComponent } from '../show-examinater-modal/show-examinater-modal.component';
import { UpdateExaminaterModalComponent } from '../update-examinater-modal/update-examinater-modal.component';

@Component({
  selector: 'app-examinaters',
  templateUrl: './examinaters.component.html',
  styleUrls: ['./examinaters.component.scss']
})
export class ExaminatersComponent {
  examinaters: any[] = [];
  isModalOpen = false;

  constructor(private examinaterService: ExaminaterService,private modalService: NgbModal) {}

  ngOnInit(): void {
    // Subscribe to the clients$ observable to get updates
    this.examinaterService.examinaters$.subscribe((data) => {
      this.examinaters = data;
    });

    // Trigger the API call to get clients
    this.examinaterService.getAll();    
  }

  
  toggleModal() {
    this.isModalOpen = !this.isModalOpen;    
  }


  openModal(content: any) {
    this.modalService.open(content, { centered: true, size: 'lg' }); // Adjust size and options as needed
  }

  deleteExaminater(examinaterId:string){
    this.examinaterService.deleteExaminater(examinaterId);
  }

  openExaminaterDetailModal(examinater: any): void {
    const modalRef = this.modalService.open(ShowExaminaterModalComponent, { centered: true, size: 'lg' });
    modalRef.componentInstance.examinater = examinater; // Pass the selected client to the modal
  }

  openUpdateExaminaterModal(examinater: any): void {
    const modalRef = this.modalService.open(UpdateExaminaterModalComponent, { centered: true, size: 'lg' });
    modalRef.componentInstance.examinater = examinater; // Pass the selected client to the modal
  }
}
