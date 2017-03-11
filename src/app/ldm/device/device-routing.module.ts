import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeviceComponent } from './device.component'

const routes: Routes = [
    { path: "", component: DeviceComponent }

];

export const Routing = RouterModule.forChild(routes);
