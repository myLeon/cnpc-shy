// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ChargesComponent } from './charges.component';
// import { Routing } from './charges-routing.module';
// import { ListComponent } from './list/list.component';
// import { ChargesFilterPipe } from './_pipe/charges-filter.pipe';

// @NgModule({
//   imports: [
//     CommonModule,
//     Routing
//   ],
//   declarations: [ChargesComponent, ListComponent, ChargesFilterPipe]
// })
// export class ChargesModule { }

import { Routing } from './charges-routing.module';
import { ListComponent } from './list/list.component';
import { ChargesComponent } from './charges.component';
import { ChargesFilterPipe } from './_pipe/charges-filter.pipe';
import { CommonModule } from '@angular/common';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MomentModule } from 'angular2-moment';
import { Md2Module } from 'md2';
import { MdlModule } from 'angular2-mdl'
import { GridModule } from '@progress/kendo-angular-grid';
import { TickerModule } from '../../_directives/ticker/ticker.module';
import { Ng2TableModule } from 'ng2-table';
import { SimpleTableModule } from '../../_components/simple-table/simple-table.module';
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
  declarations: [ChargesComponent, ChargesFilterPipe, ListComponent],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "en-US"
      //useValue: "zh-CN"
    }
  ]
})
export class ChargesModule { }