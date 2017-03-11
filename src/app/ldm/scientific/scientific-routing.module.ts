import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScientifiComponent } from './scientific.component'
const routes: Routes = [
  { path: "", component: ScientifiComponent }
];

export const Routing = RouterModule.forChild(routes);
