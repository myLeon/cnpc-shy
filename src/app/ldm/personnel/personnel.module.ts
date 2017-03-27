import { CommonModule } from '@angular/common';
import { Routing } from './personnel-routing.module';
import { PersonnelComponent } from './personnel.component';
import { ListComponent } from './list/list.component';
import { TickerModule } from '../../_directives/ticker/ticker.module';
import { NgModule, LOCALE_ID } from '@angular/core';
import { SimpleTableModule } from '../../_components/simple-table/simple-table.module';
import { UserService } from '../../_core/user.service';
import { PersonnelService } from './personnel.service'
import { Ng2TableModule } from 'ng2-table';
import { EChartModule } from 'ng2-echarts-d3';
import { MomentModule } from 'angular2-moment';
import { Md2Module } from 'md2';
import { MdlModule } from 'angular2-mdl';
import { PersonnelFilterPipe } from './_pipe/personnel-filter.pipe';
import { FormsModule } from '@angular/forms';
import { GridModule } from '@progress/kendo-angular-grid';
import { NomorlFilterModule } from "../../_components/nomorl-filter/nomorl-filter.module"


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
    FormsModule,
    NomorlFilterModule
  ],
  declarations: [PersonnelComponent, ListComponent, PersonnelFilterPipe],
  providers: [{ provide: 'PersonnelService', useClass: PersonnelService }, UserService],

})
export class PersonnelModule { }
