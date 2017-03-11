import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChargesComponent } from './charges.component'


const routes: Routes = [
  { path: "", component: ChargesComponent }
];

export const Routing = RouterModule.forChild(routes);
