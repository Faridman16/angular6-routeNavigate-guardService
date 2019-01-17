import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageHeroesComponent } from './manage-heroes/manage-heroes.component';
import { ManageCrisesComponent } from './manage-crises/manage-crises.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard], children: [
    {path: '1', component: AdminDashboardComponent},
    {path: '2', component: ManageHeroesComponent},
    {path: '3', component: ManageCrisesComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
