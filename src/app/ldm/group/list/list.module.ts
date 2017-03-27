import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EchartsDirective } from '../../../_directives/echarts/echarts.directive';
import { Routing } from './list-routing.module';
import {ListComponent} from './list.component';
import { EChartModule  } from 'ng2-echarts-d3';
import{ ListService} from './list.service'

@NgModule({
  imports: [
    CommonModule,
    Routing,
    EChartModule
  ],
  declarations: [ListComponent,EchartsDirective,EchartsDirective],
  providers: [{ provide: 'ListService', useClass: ListService }],
})
export class ListModule { }
