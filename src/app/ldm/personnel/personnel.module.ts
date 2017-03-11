import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routing } from './personnel-routing.module';
import { PersonnelComponent } from './personnel.component';
import { MomentModule } from 'angular2-moment';
import { Md2Module } from 'md2';
import { MdlModule } from 'angular2-mdl'
import { GridModule } from '@progress/kendo-angular-grid';
import { TickerModule } from '../../_directives/ticker/ticker.module';
import { PersonnlFilterPipe } from './_pipes/personnel/personnel-filter.pipe';
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
  declarations: [PersonnelComponent, PersonnlFilterPipe, ListComponent],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "en-US"
      //useValue: "zh-CN"
    }
  ]
})
export class PersonnelModule { }













// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { EchartsMapDirective } from '../../_directives/echarts-map/echarts-map.directive';
// import { Routing } from './personnel-routing.module';
// // import { ListComponent } from './list/list.component';
// import { PersonnelComponent } from './personnel.component';
// import { DetailedComponent } from './detailed/detailed.component';

// @NgModule({
//   imports: [
//     CommonModule,
//     Routing
//   ],
//   declarations: [PersonnelComponent,EchartsMapDirective, DetailedComponent]
// })
// export class GroupModule { }