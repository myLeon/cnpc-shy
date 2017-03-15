import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScientificComponent} from './scientific.component';
import { ListComponent} from './list/list.component'


const routes: Routes = [
    {
    path:'',
    component: ScientificComponent,
    children:[
      {path:'',redirectTo:'list',pathMatch:'full'},
      {path:'list',component:ListComponent},
      {path:'detail',loadChildren:'app/ldm/scientific/detail/detail.module#DetailModule'}
    ]
}

];

export const Routing = RouterModule.forChild(routes);
