import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  //{ path: '', component:LoginComponent  },
  { path: '', redirectTo: 'ldm/shy', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'ldm/:id', redirectTo: 'ldm' },
  { path: 'demo', loadChildren: 'app/demo/demo.module#DemoModule' }
];

export const Routing = RouterModule.forRoot(routes, { useHash: true });
