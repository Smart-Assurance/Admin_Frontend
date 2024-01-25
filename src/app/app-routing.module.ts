import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component'
import { AuthAdminGuard } from './helpers/auth-admin.guard';
import { GuestGuard } from './helpers/guest.guard';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { ContractsComponent } from './components/contracts/contracts.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { ProfileAdminComponent } from './components/profile-admin/profile-admin.component';

const routes: Routes = [
  
  { path: 'login', component: LoginComponent, canActivate: [GuestGuard] },
  { path: 'dashboard-admin', component: DashboardAdminComponent, canActivate: [AuthAdminGuard]  },
  { path: 'contracts', component: ContractsComponent, canActivate: [AuthAdminGuard] },
  { path: 'employees', component: EmployeesComponent, canActivate: [AuthAdminGuard] },
  { path: 'profile-admin', component: ProfileAdminComponent, canActivate: [AuthAdminGuard]  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
