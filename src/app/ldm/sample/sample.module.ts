import { CommonModule } from '@angular/common';
import { Routing } from './sample-routing.module';
import { SampleComponent } from './sample.component';
import { ListComponent } from './list/list.component';
import { TickerModule } from '../../_directives/ticker/ticker.module';
import { NgModule, LOCALE_ID } from '@angular/core';
import { SimpleTableModule } from '../../_components/simple-table/simple-table.module';
import {UserService } from '../../_core/user.service';
import { SampleService } from './sample.service'
import { Ng2TableModule } from 'ng2-table';
import { EChartModule } from 'ng2-echarts-d3';
import { MomentModule } from 'angular2-moment';
import { Md2Module } from 'md2';
import { MdlModule } from 'angular2-mdl';
import {SampleFilterPipe} from './_pipe/sample-filter.pipe'

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
  declarations: [SampleComponent, ListComponent,SampleFilterPipe],
    providers: [{ provide: 'SampleService', useClass: SampleService },UserService],

})
export class SampleModule { }
