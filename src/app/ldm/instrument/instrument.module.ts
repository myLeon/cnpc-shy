import { CommonModule } from '@angular/common';
import { Routing } from './instrument-routing.module';
import { InstrumentComponent } from './instrument.component';
import { ListComponent } from './list/list.component';
import { TickerModule } from '../../_directives/ticker/ticker.module';
import { NgModule, LOCALE_ID } from '@angular/core';
import { SimpleTableModule } from '../../_components/simple-table/simple-table.module';
import {UserService } from '../../_core/user.service';
import { InstrumentService } from './instrument.service'
import { Ng2TableModule } from 'ng2-table';
import { EChartModule } from 'ng2-echarts-d3';
import { MomentModule } from 'angular2-moment';
import { Md2Module } from 'md2';
import { MdlModule } from 'angular2-mdl';
import { InstrumentFilterPipe } from './_pipe/instrument-filter.pipe';
import { FormsModule } from '@angular/forms';
import { GridModule } from '@progress/kendo-angular-grid';


@NgModule({
  imports: [
    CommonModule,
    Routing,
    TickerModule,
    GridModule,
    Ng2TableModule,
    SimpleTableModule,
    EChartModule,
    MomentModule,
    Md2Module,
    MdlModule,
    FormsModule
  ],
  declarations: [InstrumentComponent, ListComponent,InstrumentFilterPipe],
    providers: [{ provide: 'InstrumentService', useClass: InstrumentService },UserService],

})
export class InstrumentModule { }
