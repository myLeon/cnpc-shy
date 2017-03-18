import { CommonModule } from '@angular/common';
import { Routing } from './method-routing.module';
import { MethodComponent } from './method.component';
import { ListComponent } from './list/list.component';
import { TickerModule } from '../../_directives/ticker/ticker.module';
import { NgModule, LOCALE_ID } from '@angular/core';
import { SimpleTableModule } from '../../_components/simple-table/simple-table.module';
import {UserService } from '../../_core/user.service';
import { MethodService } from './method.service'
import { Ng2TableModule } from 'ng2-table';
import { EChartModule } from 'ng2-echarts-d3';
import { MomentModule } from 'angular2-moment';
import { Md2Module } from 'md2';
import { MdlModule } from 'angular2-mdl';
import { MethodFilterPipe } from './_pipe/method-filter.pipe'
import { FormsModule } from '@angular/forms';
// import * as $ from 'jquery';

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
    FormsModule
  ],
  declarations: [MethodComponent, ListComponent,MethodFilterPipe],
    providers: [{ provide: 'MethodService', useClass: MethodService },UserService],

})
export class MethodModule { }
