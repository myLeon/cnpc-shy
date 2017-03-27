

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleComponent } from './sample.component';
import { ListComponent } from './list/list.component'
const routes: Routes = [
  {
    path: '',
    component: SampleComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ListComponent },
      { path: 'detail', loadChildren: 'app/ldm/sample/detail/detail.module#DetailModule' }
    ]
  }
];

export const Routing = RouterModule.forChild(routes);
