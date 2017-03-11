import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonnelComponent } from './personnel.component'
const routes: Routes = [
  { path: "", component: PersonnelComponent }
];

export const Routing = RouterModule.forChild(routes);


// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { PersonnelComponent } from './personnel.component';
// import { ListComponent } from './list/list.component';
// const routes: Routes = [
//   {
//     path:'',
//     component:PersonnelComponent,
//     children:[
//       {path:'',redirectTo:'list',pathMatch:'full'},
//       {path:'list',component:ListComponent},
//       {path:'detailed',loadChildren:'app/ldm/personnel/detailed/detailed.module#DetailedModule'}
//     ]

// }
// ];

// export const Routing= RouterModule.forChild(routes);