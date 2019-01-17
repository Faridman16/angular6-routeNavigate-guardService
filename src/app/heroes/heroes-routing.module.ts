import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const Heroroutes: Routes = [
  {path: 'heroes', component: HeroListComponent, data: {animation: 'heroes'}},
  {path: 'heroes/:id', component: HeroDetailComponent, data: {animation: 'hero'}},
];

@NgModule({
  imports: [RouterModule.forChild(Heroroutes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
