import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routing } from './ldm-routing.module';
import { LdmComponent } from './ldm.component';
import { HomeComponent } from './home/home.component';
import { TickerModule } from '../_directives/ticker/ticker.module';
// import { EchartsModule } from '../_directives/echarts/echarts.module'
import { SimpleTableModule } from '../_components/simple-table/simple-table.module';
import {UserService } from '../_core/user.service';
import { HomeService } from './home/home.service'
import { Ng2TableModule } from 'ng2-table';
import { EChartModule } from 'ng2-echarts-d3';
// import { EvaluatePipe } from './evaluate.pipe';
// import { EverydayComponent } from './everyday/everyday.component';
// import { MethodComponent } from './method/method.component';
// import { PipePipe } from './statitics/-pipe.pipe';
// import { GrupComponent } from './grup/grup.component';
// import { EverydayComponent } from './everyday/everyday.component';
// import { EvaluateComponent } from './evaluate/evaluate.component';
// import { EquipmentComponent } from './equipment/equipment.component';
// import { DeviceComponent } from './device/device.component';
// import { ChargesComponent } from './charges/charges.component';
// import { AnalyzeComponent } from './analyze/analyze.component';
// import { StatisticsComponent } from './statistics/statistics.component';
// import { ScientificComponent } from './scientific/scientific.component';
// import { PersonnelComponent } from './personnel/personnel.component';

@NgModule({
  imports: [
    CommonModule,
    Routing,
    TickerModule,
    // EchartsModule,
    Ng2TableModule,
    SimpleTableModule,
    EChartModule
  ],
  declarations: [LdmComponent, HomeComponent],
    providers: [{ provide: 'HomeService', useClass: HomeService },UserService],

})
export class LdmModule { }
