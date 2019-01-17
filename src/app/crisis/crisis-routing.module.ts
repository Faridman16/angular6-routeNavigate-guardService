import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrisisComponent } from './crisis.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisHomeComponent } from './crisis-home/crisis-home.component';

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