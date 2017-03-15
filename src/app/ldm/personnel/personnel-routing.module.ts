// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { DeviceComponent } from './device.component'

// const routes: Routes = [
//     { path: "", component: DeviceComponent }

// ];

// export const Routing = RouterModule.forChild(routes);


// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { EquipmentComponent }  from './equipment.component'
// const routes: Routes = [
//   { path: "", component: EquipmentComponent }
// ];

// export const Routing = RouterModule.forChild(routes);



import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonnelComponent } from './personnel.component';
// import { DetailComponent } from './detail/detail.component';
import { ListComponent} from './list/list.component'
const routes: Routes = [
  {
    path:'',
    component:PersonnelComponent,
    children:[
      {path:'',redirectTo:'list',pathMatch:'full'},
      {path:'list',component:ListComponent},
      {path:'detail',loadChildren:'app/ldm/personnel/detail/detail.module#DetailModule'}
    ]
}
];

export const Routing= RouterModule.forChild(routes);
