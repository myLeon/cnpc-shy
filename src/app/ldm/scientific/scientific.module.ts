import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routing } from './scientific-routing.module';
import { ScientificComponent } from './scientific.component';
import { MomentModule } from 'angular2-moment';
import { Md2Module } from 'md2';
import { MdlModule } from 'angular2-mdl'
import { GridModule } from '@progress/kendo-angular-grid';
import { TickerModule } from '../../_directives/ticker/ticker.module';
import { ScientificPipe } from './_pipes/scientific-filter';
import { Ng2TableModule } from 'ng2-table';
import { SimpleTableModule } from '../../_components/simple-table/simple-table.module';
import { ListComponent } from './list/list.component';
// import { DetailComponent } from './detail/detail.component';

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
  declarations: [ScientificComponent, ScientificPipe, ListComponent],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "en-US"
      //useValue: "zh-CN"
    }
  ]
})
export class ScientificModule { }