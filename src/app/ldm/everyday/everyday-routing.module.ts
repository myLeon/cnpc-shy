import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EverydayComponent } from './everyday.component'

const routes: Routes = [
  { path: "", component: EverydayComponent }
];

export const Routing = RouterModule.forChild(routes);
