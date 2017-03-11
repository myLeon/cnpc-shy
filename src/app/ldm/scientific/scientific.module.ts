// import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routing } from './scientific-routing.module';
import { ScientifiComponent } from './scientific.component';
import { ScientificPipe } from './_pipes/scientific.pipe';
// 
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
// import { PersonnlFilterPipe } from './_pipes/personnel/personnel-filter.pipe';
import { Ng2TableModule } from 'ng2-table';
import { SimpleTableModule } from '../../_components/simple-table/simple-table.module';

@NgModule({
  imports: [
    CommonModule,
    Routing,
    SimpleTableModule,
    Ng2TableModule,
    TickerModule,
    GridModule,
    MdlModule,
    MomentModule,
    FormsModule
  ],
  declarations: [ScientifiComponent, ScientificPipe]
})
export class ScientificModule { }
