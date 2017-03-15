import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component'
import { Routing } from './detail-routing.module';

@NgModule({
  imports: [
    CommonModule,
    Routing
  ],
  declarations: [DetailComponent]
})
export class DetailModule { }
