import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routing } from './statistics-routing.module';
import { StatisticsComponent } from './statistics.component';
import { ListComponent } from './list/list.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { Md2Module } from 'md2';
import { MdlModule } from 'angular2-mdl'
import { FormsModule } from '@angular/forms';
import { MomentModule } from 'angular2-moment';
import { TickerModule } from '../../_directives/ticker/ticker.module';
import { Ng2TableModule } from 'ng2-table';
import { SimpleTableModule } from '../../_components/simple-table/simple-table.module';
import { StatisticsFilterPipe } from './_pipe/statistics-filter.pipe';

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
  declarations: [StatisticsComponent, ListComponent, StatisticsFilterPipe]
})
export class StatisticsModule {  }
