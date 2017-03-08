import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LdmComponent } from './ldm.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'ldm/:id',
    component: LdmComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
    ]
  },

];

export const Routing = RouterModule.forChild(routes);
