import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LdmComponent } from './ldm.component';
import { HomeComponent } from './home/home.component';
import { OrganizationComponent } from './organization/organization.component'

const routes: Routes = [
  {
    path: 'ldm/:id',
    component: LdmComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'personnel', loadChildren: 'app/ldm/personnel/personnel.module#PersonnelModule' },
       { path: 'organization', loadChildren: 'app/ldm/organization/organization.module#OrganizationModule' },
       { path: 'analyze', loadChildren: 'app/ldm/analyze/analyze.module#AnalyzeModule' },
       { path: 'equipment', loadChildren: 'app/ldm/equipment/equipment.module#EquipmentModule' },
       { path: 'evaluate', loadChildren: 'app/ldm/evaluate/evaluate.module#EvaluateModule' },
       { path: 'device', loadChildren: 'app/ldm/device/device.module#DeviceModule' },
       { path: 'statistics', loadChildren: 'app/ldm/statistics/statistics.module#StatisticsModule' },
       { path: 'everyday', loadChildren: 'app/ldm/everyday/everyday.module#EverydayModule' },
       { path: 'method', loadChildren: 'app/ldm/method/method.module#MethodModule' },
       { path: 'scientific', loadChildren: 'app/ldm/scientific/scientific.module#ScientificModule' },
       { path: 'charges', loadChildren: 'app/ldm/charges/charges.module#ChargesModule' },
       { path: 'list', loadChildren: 'app/ldm/organization/list/list.module#ListModule' }
    ]
  },

];

export const Routing = RouterModule.forChild(routes);
