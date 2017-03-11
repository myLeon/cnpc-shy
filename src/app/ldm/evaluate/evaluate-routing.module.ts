import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EvaluateComponent } from './evaluate.component'

const routes: Routes = [
   { path: "", component: EvaluateComponent }
];

export const Routing = RouterModule.forChild(routes);
