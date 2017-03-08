import { NgModule } from '@angular/core';
import { TickerDirective }  from './ticker.directive';

@NgModule({
  declarations: [ TickerDirective ],
  exports:[TickerDirective]
})
export class TickerModule {}
