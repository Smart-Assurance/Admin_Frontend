import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './shared/header/header.component';
import { TokenInterceptor } from './helpers/token.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
    HeaderComponent,
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
