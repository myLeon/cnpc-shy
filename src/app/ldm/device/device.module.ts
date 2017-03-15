// import { Routing } from './device-routing.module';
// import { ListComponent } from './list/list.component';
// import { DeviceComponent } from './device.component';
// import { DeviceFilterPipe } from './_pipe/device-filter.pipe';
// import { CommonModule } from '@angular/common';
// import { NgModule, LOCALE_ID } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { MomentModule } from 'angular2-moment';
// import { Md2Module } from 'md2';
// import { MdlModule } from 'angular2-mdl'
// import { GridModule } from '@progress/kendo-angular-grid';
// import { TickerModule } from '../../_directives/ticker/ticker.module';
// import { Ng2TableModule } from 'ng2-table';
// import { SimpleTableModule } from '../../_components/simple-table/simple-table.module';
// import { EchartsMapDirective } from '../../_directives/echarts-map/echarts-map.directive';
// import {UserService } from '../../_core/user.service';

// @NgModule({
//   imports: [
//     CommonModule,
//     FormsModule,
//     MomentModule,
//     Md2Module.forRoot(),
//     MdlModule,
//     Routing,
//     GridModule,
//     TickerModule,
//     Ng2TableModule,
//     SimpleTableModule
//   ],
//   declarations: [DeviceComponent, DeviceFilterPipe, ListComponent],
//   providers: [
//     {
//       provide: 'DeviceService', useClass: DeviceService
//       //useValue: "zh-CN"
//     },
//       UserService
//   ]
// })
// // export class EvaluatetModule { }
// export class DeviceModule { }




// import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routing } from './device-routing.module';
import { DeviceComponent } from './device.component';
import { ListComponent } from './list/list.component';
import { TickerModule } from '../../_directives/ticker/ticker.module';
import { NgModule, LOCALE_ID } from '@angular/core';
import { SimpleTableModule } from '../../_components/simple-table/simple-table.module';
import {UserService } from '../../_core/user.service';
import { DeviceService } from './device.service'
import { Ng2TableModule } from 'ng2-table';
import { EChartModule } from 'ng2-echarts-d3';
import { MomentModule } from 'angular2-moment';
import { Md2Module } from 'md2';
import { MdlModule } from 'angular2-mdl';
import {DeviceFilterPipe} from './_pipe/device-filter.pipe'

@NgModule({
  imports: [
    CommonModule,
    Routing,
    TickerModule,
    // EchartsModule,
    Ng2TableModule,
    SimpleTableModule,
    EChartModule,
    MomentModule,
    Md2Module,
    MdlModule
  ],
  declarations: [DeviceComponent, ListComponent,DeviceFilterPipe],
    providers: [{ provide: 'DeviceService', useClass: DeviceService },UserService],

})
export class DeviceModule { }
