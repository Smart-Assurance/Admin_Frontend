import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReportsComponent } from './components/reports/reports.component';
import { ExaminatersComponent } from './components/examinaters/examinaters.component';
import { ClientsComponent } from './components/clients/clients.component';
import { AuthAdminGuard } from './helpers/auth-admin.guard';
import { GuestGuard } from './helpers/guest.guard';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { AuthEmployeeGuard } from './helpers/auth-employee.guard';
import { ContractsComponent } from './components/contracts/contracts.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { ProfileAdminComponent } from './components/profile-admin/profile-admin.component';
import { AuthExaminaterGuard } from './helpers/auth-examinater.guard';
import { AddReportComponent } from './components/add-report/add-report.component';

const routes: Routes = [
  
  { path: 'login', component: LoginComponent, canActivate: [GuestGuard] },
  { path: 'reports', component: ReportsComponent, canActivate: [AuthEmployeeGuard] },
  { path: 'examinaters', component: ExaminatersComponent,canActivate: [AuthEmployeeGuard]} ,
  { path: 'clients', component: ClientsComponent, canActivate: [AuthEmployeeGuard]  },
  { path: 'dashboard-employee', component: DashboardComponent, canActivate: [AuthEmployeeGuard]  },
  { path: 'dashboard-admin', component: DashboardAdminComponent, canActivate: [AuthAdminGuard]  },
  { path: 'contracts', component: ContractsComponent, canActivate: [AuthAdminGuard] },
  { path: 'employees', component: EmployeesComponent, canActivate: [AuthAdminGuard] },
  { path: 'profile-admin', component: ProfileAdminComponent, canActivate: [AuthAdminGuard]  },
  { path: 'dashboard-examinater', component: AddReportComponent, canActivate: [AuthExaminaterGuard]  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
