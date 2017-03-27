import { CommonModule } from '@angular/common';
import { Routing } from './task-routing.module';
import { TaskComponent } from './task.component';
import { ListComponent } from './list/list.component';
import { TickerModule } from '../../_directives/ticker/ticker.module';
import { NgModule, LOCALE_ID } from '@angular/core';
import { SimpleTableModule } from '../../_components/simple-table/simple-table.module';
import {UserService } from '../../_core/user.service';
import { TaskService } from './task.service'
import { Ng2TableModule } from 'ng2-table';
import { EChartModule } from 'ng2-echarts-d3';
import { MomentModule } from 'angular2-moment';
import { Md2Module } from 'md2';
import { MdlModule } from 'angular2-mdl';
import {SampleFilterPipe} from './_pipe/task-filter.pipe'
import { FormsModule } from '@angular/forms';
import { GridModule } from '@progress/kendo-angular-grid';
import { NomorlFilterModule } from "../../_components/nomorl-filter/nomorl-filter.module"
import { NomorModule } from "../../_components/nomorl/nomorl.module"
import { NomorlLateFilterModule } from "../../_components/nomorl-late-filter/nomorl-late-filter.module"

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
    FormsModule,
    GridModule,
    NomorlFilterModule,
    NomorModule,
    NomorlLateFilterModule
  ],
  declarations: [TaskComponent, ListComponent,SampleFilterPipe],
    providers: [{ provide: 'TaskService', useClass: TaskService },UserService],

})
export class TaskModule { }
