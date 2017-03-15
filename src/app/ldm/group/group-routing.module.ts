import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupComponent } from "./group.component";
import { MapComponent } from './map/map.component'


const routes: Routes = [
    {
    path:'',
    component: GroupComponent,
    children:[
      {path:'',redirectTo:'map',pathMatch:'full'},
      {path:'map',component:MapComponent},
      {path:'list',loadChildren:'app/ldm/group/list/list.module#ListModule'}
    ]
}

];

export const Routing = RouterModule.forChild(routes);