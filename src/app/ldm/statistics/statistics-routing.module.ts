import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatisticsComponent} from './statistics.component';
import { ListComponent} from './list/list.component'

const routes: Routes = [
    {
    path:'',
    component: StatisticsComponent,
    children:[
      {path:'',redirectTo:'list',pathMatch:'full'},
      {path:'list',component:ListComponent},
      {path:'list',loadChildren:'app/ldm/statistics/list/list.module#ListModule'}
    ]
}

];

export const Routing = RouterModule.forChild(routes);
