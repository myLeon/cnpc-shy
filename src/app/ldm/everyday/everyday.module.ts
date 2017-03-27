import { CommonModule } from '@angular/common';
import { Routing } from './everyday-routing.module';
import { EverydayComponent } from './everyday.component';
import { ListComponent } from './list/list.component';
import { TickerModule } from '../../_directives/ticker/ticker.module';
import { NgModule, LOCALE_ID } from '@angular/core';
import { SimpleTableModule } from '../../_components/simple-table/simple-table.module';
import { UserService } from '../../_core/user.service';
import { EverydayService } from './everyday.service'
import { Ng2TableModule } from 'ng2-table';
import { EChartModule } from 'ng2-echarts-d3';
import { MomentModule } from 'angular2-moment';
import { Md2Module } from 'md2';
import { MdlModule } from 'angular2-mdl';
import {EverdayFilterPipe} from './_pipe/everyday-filter.pipe'
import { FormsModule } from '@angular/forms';
import { GridModule } from '@progress/kendo-angular-grid';
import { NomorlFilterModule } from "../../_components/nomorl-filter/nomorl-filter.module"
import { NomorModule } from "../../_components/nomorl/nomorl.module"


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
    NomorModule
  ],
  declarations: [EverydayComponent, ListComponent,EverdayFilterPipe],
    providers: [{ provide: 'EverydayService', useClass: EverydayService },UserService],

})
export class EverydayModule { }
