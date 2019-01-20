import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrisisComponent } from './crisis.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisHomeComponent } from './crisis-home/crisis-home.component';
import { CanDeactivateGuard } from '../_service/can-deactivate.guard';

const crisisRoutes: Routes = [
  {
    path: 'crisis',
    component: CrisisComponent,
    children: [
      {
        path: '',
        component: CrisisListComponent,
        children: [
          {
            path: '',
            component: CrisisHomeComponent,
          },
          {
            path: ':id',
            component: CrisisDetailComponent,
            canDeactivate: [CanDeactivateGuard],
          }
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(crisisRoutes)],
  exports: [RouterModule]
})
export class CrisisRoutingModule { }
