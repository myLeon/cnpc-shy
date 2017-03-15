

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskComponent } from './task.component';
// import { DetailComponent } from './detail/detail.component';
import { ListComponent} from './list/list.component'
const routes: Routes = [
  {
    path:'',
    component:TaskComponent,
    children:[
      {path:'',redirectTo:'list',pathMatch:'full'},
      {path:'list',component:ListComponent},
      {path:'detail',loadChildren:'app/ldm/task/detail/detail.module#DetailModule'},
      
    ]
}
];

export const Routing= RouterModule.forChild(routes);
