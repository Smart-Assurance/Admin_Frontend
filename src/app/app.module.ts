import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { HeaderComponent } from './shared/header/header.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ExaminatersComponent } from './components/examinaters/examinaters.component';
import { ReportsComponent } from './components/reports/reports.component';
import { TokenInterceptor } from './helpers/token.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddClientModalComponent } from './components/add-client-modal/add-client-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddExaminaterModalComponent } from './components/add-examinater-modal/add-examinater-modal.component';
import { ShowClientModalComponent } from './components/show-client-modal/show-client-modal.component';
import { UpdateClientModalComponent } from './components/update-client-modal/update-client-modal.component';
import { UpdateExaminaterModalComponent } from './components/update-examinater-modal/update-examinater-modal.component';
import { ShowExaminaterModalComponent } from './components/show-examinater-modal/show-examinater-modal.component';
import { ShowReportModalComponent } from './components/show-report-modal/show-report-modal.component';
import { TransactionReportModalComponent } from './components/transaction-report-modal/transaction-report-modal.component';
import { SideBarAdminComponent } from './shared/side-bar-admin/side-bar-admin.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { ContractsComponent } from './components/contracts/contracts.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { ProfileAdminComponent } from './components/profile-admin/profile-admin.component';
import { ShowContractModalComponent } from './components/show-contract-modal/show-contract-modal.component';
import { AddContractModalComponent } from './components/add-contract-modal/add-contract-modal.component';
import { UpdateContractModalComponent } from './components/update-contract-modal/update-contract-modal.component';
import { AddEmployeeModalComponent } from './components/add-employee-modal/add-employee-modal.component';
import { ShowEmployeeModalComponent } from './components/show-employee-modal/show-employee-modal.component';
import { UpdateEmployeeModalComponent } from './components/update-employee-modal/update-employee-modal.component'; // Import BrowserAnimationsModule

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SideBarComponent,
    HeaderComponent,
    ClientsComponent,
    ExaminatersComponent,
    ReportsComponent,
    AddClientModalComponent,
    AddExaminaterModalComponent,
    ShowClientModalComponent,
    UpdateClientModalComponent,
    UpdateExaminaterModalComponent,
    ShowExaminaterModalComponent,
    ShowReportModalComponent,
    TransactionReportModalComponent,
    SideBarAdminComponent,
    EmployeesComponent,
    ContractsComponent,
    DashboardAdminComponent,
    ProfileAdminComponent,
    ShowContractModalComponent,
    AddContractModalComponent,
    UpdateContractModalComponent,
    AddEmployeeModalComponent,
    ShowEmployeeModalComponent,
    UpdateEmployeeModalComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
