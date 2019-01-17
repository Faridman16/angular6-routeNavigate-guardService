import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisComponent } from './crisis.component';
import { CrisisRoutingModule } from './crisis-routing.module';
import { CrisisHomeComponent } from './crisis-home/crisis-home.component';

@NgModule({
  declarations: [
    CrisisListComponent,
    CrisisDetailComponent,
    CrisisComponent,
    CrisisHomeComponent,
  ],
  imports: [
    CommonModule,
    CrisisRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [
    CrisisListComponent,
    CrisisDetailComponent,
    CrisisHomeComponent,
  ]
})
export class CrisisModule { }
