import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LdmComponent } from './ldm.component';
import { HomeComponent } from './home/home.component';
// import { OrganizationComponent } from './organization/organization.component'

const routes: Routes = [
  {
    path: 'ldm/:id',
    component: LdmComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'personnel', loadChildren: 'app/ldm/personnel/personnel.module#PersonnelModule' },
       { path: 'group', loadChildren: 'app/ldm/group/group.module#GroupModule' },
       { path: 'sample', loadChildren: 'app/ldm/sample/sample.module#SampleModule' },
       { path: 'instrument', loadChildren: 'app/ldm/instrument/instrument.module#InstrumentModule' },
       { path: 'task', loadChildren: 'app/ldm/task/task.module#TaskModule' },
       { path: 'device', loadChildren: 'app/ldm/device/device.module#DeviceModule' },
       { path: 'statistics', loadChildren: 'app/ldm/statistics/statistics.module#StatisticsModule' },
       { path: 'everyday', loadChildren: 'app/ldm/everyday/everyday.module#EverydayModule' },
       { path: 'method', loadChildren: 'app/ldm/method/method.module#MethodModule' },
       { path: 'scientific', loadChildren: 'app/ldm/scientific/scientific.module#ScientificModule' },
       { path: 'charges', loadChildren: 'app/ldm/charges/charges.module#ChargesModule' }
    ]
  },
];
export const Routing = RouterModule.forChild(routes);