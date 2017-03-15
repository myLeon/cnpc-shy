



import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MethodComponent } from './method.component';
// import { DetailComponent } from './detail/detail.component';
import { ListComponent} from './list/list.component'
const routes: Routes = [
  {
    path:'',
    component:MethodComponent,
    children:[
      {path:'',redirectTo:'list',pathMatch:'full'},
      {path:'list',component:ListComponent},
      {path:'detail',loadChildren:'app/ldm/method/detail/detail.module#DetailModule'}
    ]
}
];

export const Routing= RouterModule.forChild(routes);
