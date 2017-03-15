// import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EchartsMapDirective } from '../../_directives/echarts-map/echarts-map.directive';
import { Routing } from './statistics-routing.module';
// import { ListComponent } from './list/list.component';
import {StatisticsComponent } from './statistics.component';



import { NgModule, LOCALE_ID } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { Routing } from './personnel-routing.module';
// import { PersonnelComponent } from './personnel.component';
import { MomentModule } from 'angular2-moment';
import { Md2Module } from 'md2';
import { MdlModule } from 'angular2-mdl'
import { GridModule } from '@progress/kendo-angular-grid';
import { TickerModule } from '../../_directives/ticker/ticker.module';
import { StatisticsFilterPipe } from './_pipe/statistics-filter.pipe';
import { Ng2TableModule } from 'ng2-table';
import { SimpleTableModule } from '../../_components/simple-table/simple-table.module';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MomentModule,
    Md2Module.forRoot(),
    MdlModule,
    Routing,
    GridModule,
    TickerModule,
    Ng2TableModule,
    SimpleTableModule
  ],
  declarations: [StatisticsComponent, StatisticsFilterPipe, ListComponent],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "en-US"
      //useValue: "zh-CN"
    }
  ]
})



@NgModule({
  imports: [
    CommonModule,
    Routing
  ],
  declarations: [ListComponent, StatisticsComponent,EchartsMapDirective]
})
export class StatisticsModule { }