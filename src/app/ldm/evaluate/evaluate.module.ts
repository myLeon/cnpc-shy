import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvaluateComponent } from './evaluate.component'
import { Routing } from './evaluate-routing.module';

@NgModule({
  imports: [
    CommonModule,
    Routing
  ],
  declarations: [EvaluateComponent]
})
export class EvaluateModule { }
