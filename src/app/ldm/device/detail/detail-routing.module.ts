import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail.component'

const routes: Routes = [{
  path:'',
    component:DetailComponent,  
}
   
];

export const Routing = RouterModule.forChild(routes);
