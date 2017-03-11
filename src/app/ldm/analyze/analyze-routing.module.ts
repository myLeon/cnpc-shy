import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalyzeComponent } from './analyze.component';

const routes: Routes = [
    { path: "", component: AnalyzeComponent }

];

export const Routing = RouterModule.forChild(routes);
