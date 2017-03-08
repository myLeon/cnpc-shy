import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routing } from './demo-routing.module';
import { DemoComponent,DataTablePipe } from './demo.component';
import { MomentModule } from 'angular2-moment';
import { Md2Module } from 'md2';
import { MdlModule } from 'angular2-mdl'
import { GridModule } from '@progress/kendo-angular-grid';
import { TickerModule } from '../_directives/ticker/ticker.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MomentModule,
    Md2Module.forRoot(),
    MdlModule,
    Routing,
    GridModule,
TickerModule
  ],
  declarations: [DemoComponent,DataTablePipe],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "en-US"
      //useValue: "zh-CN"
    }
  ]
})
export class DemoModule { }
