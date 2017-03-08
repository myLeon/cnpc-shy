import { NgModule } from '@angular/core';
import { EchartsMapDirective }  from './echarts-map.directive';

@NgModule({
  declarations: [ EchartsMapDirective ],
  exports:[EchartsMapDirective]
})
export class EchartsMapModule {}
