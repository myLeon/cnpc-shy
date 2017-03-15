import { CommonModule } from '@angular/common';
import { EchartsMapDirective } from '../../_directives/echarts-map/echarts-map.directive';
import { Routing } from './everyday-routing.module';
import { EverydayComponent } from './everyday.component'
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MomentModule } from 'angular2-moment';
import { Md2Module } from 'md2';
import { MdlModule } from 'angular2-mdl'
import { GridModule } from '@progress/kendo-angular-grid';
import { TickerModule } from '../../_directives/ticker/ticker.module';
import { EverdayFilterPipe } from './_pipe/everyday-filter.pipe';
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
  declarations: [EverydayComponent, EverdayFilterPipe, ListComponent],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "en-US"
      //useValue: "zh-CN"
    }
  ]
})
export class EverydayModule { }
