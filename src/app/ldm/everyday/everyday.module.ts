import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EverydayComponent} from './everyday.component'
import { Routing } from './everyday-routing.module';

@NgModule({
  imports: [
    CommonModule,
    Routing
  ],
  declarations: [EverydayComponent]
})
export class EverydayModule { }
