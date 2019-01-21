import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageHeroesComponent } from './manage-heroes/manage-heroes.component';
import { ManageCrisesComponent } from './manage-crises/manage-crises.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from '../_service/auth.guard';

const routes: Routes = [
  {path: '', component: AdminComponent,
    children: [
      {path: '', component: AdminDashboardComponent},
      {path: 'manageHeroes', component: ManageHeroesComponent},
      {path: 'manageCrisis', component: ManageCrisesComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
