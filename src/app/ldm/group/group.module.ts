import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EchartsMapDirective } from '../../_directives/echarts-map/echarts-map.directive';
import { Routing } from './group-routing.module';
import { MapComponent } from './map/map.component';
import { GroupComponent } from './group.component';
import { MapService } from './map/map.service'

@NgModule({
  imports: [
    CommonModule,
    Routing
  ],
  declarations: [MapComponent, GroupComponent,EchartsMapDirective],
  providers:[{ provide: 'MapService', useClass: MapService }],
})
export class GroupModule { }
