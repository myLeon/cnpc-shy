import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routing } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { TickerModule } from '../../../_directives/ticker/ticker.module';
import { SimpleTableModule } from '../../../_components/simple-table/simple-table.module';
import { UserService } from '../../../_core/user.service';
import { DetailService } from './detail.service'
import { Ng2TableModule } from 'ng2-table';
import { EChartModule } from 'ng2-echarts-d3';
import { MomentModule } from 'angular2-moment';
import { Md2Module } from 'md2';
import { MdlModule } from 'angular2-mdl';

@NgModule({
  imports: [
    CommonModule,
    Routing,
    TickerModule,
    Ng2TableModule,
    SimpleTableModule,
    EChartModule,
    MomentModule,
    Md2Module,
    MdlModule
  ],
  declarations: [DetailComponent],
  providers: [{ provide: 'DetailService', useClass: DetailService }, UserService],

})
export class DetailModule { }
