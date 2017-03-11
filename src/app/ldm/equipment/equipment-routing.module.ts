import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EquipmentComponent }  from './equipment.component'
const routes: Routes = [
  { path: "", component: EquipmentComponent }
];

export const Routing = RouterModule.forChild(routes);
