import { CommonModule } from '@angular/common';
import { Routing } from './device-routing.module';
import { DeviceComponent } from './device.component';
import { ListComponent } from './list/list.component';
import { TickerModule } from '../../_directives/ticker/ticker.module';
import { NgModule, LOCALE_ID } from '@angular/core';
import { SimpleTableModule } from '../../_components/simple-table/simple-table.module';
import { UserService } from '../../_core/user.service';
import { DeviceService } from './device.service'
import { Ng2TableModule } from 'ng2-table';
import { EChartModule } from 'ng2-echarts-d3';
import { MomentModule } from 'angular2-moment';
import { Md2Module } from 'md2';
import { MdlModule } from 'angular2-mdl';
import { DeviceFilterPipe } from './_pipe/device-filter.pipe'
import { GridModule } from '@progress/kendo-angular-grid';
import { DateInputModule, DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { NomorModule } from "../../_components/nomorl/nomorl.module"
import { NomorlFilterModule } from "../../_components/nomorl-filter/nomorl-filter.module"



@NgModule({
  imports: [
    CommonModule,
    Routing,
    TickerModule,
    Ng2TableModule,
    SimpleTableModule,
    EChartModule,
    MomentModule,
    Md2Module,
    MdlModule,
    GridModule,
    DateInputModule,
    DateInputsModule,
    NomorModule,
    NomorlFilterModule
  ],
  declarations: [DeviceComponent, ListComponent, DeviceFilterPipe],
  providers: [{ provide: 'DeviceService', useClass: DeviceService }, UserService]

})
export class DeviceModule { }
