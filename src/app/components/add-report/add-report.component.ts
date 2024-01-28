import { Component } from '@angular/core';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.scss']
})
export class AddReportComponent {

  constructor(private reportService: ReportService){}

  report = {
    title: '',
    description: '',
    matricule: ''
  };

  submitForm() {
    if(this.report.title!=""&&this.report.description!=""&&this.report.matricule!=""){
      this.reportService.addReport(this.report);
    }else{
      alert("all fields required")
    }
  }
}
