import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EverydayComponent } from "./everyday.component";
import { ListComponent} from './list/list.component'


const routes: Routes = [
    {
    path:'',
    component: EverydayComponent,
    children:[
      {path:'',redirectTo:'list',pathMatch:'full'},
      {path:'list',component:ListComponent},
      {path:'detail',loadChildren:'app/ldm/everyday/detail/detail.module#DetailModule'}
    ]
}

];

export const Routing = RouterModule.forChild(routes);