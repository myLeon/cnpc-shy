import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailedRoutingModule } from './detailed-routing.module';
import { DetailedComponent } from './detailed.component';

@NgModule({
  imports: [
    CommonModule,
    DetailedRoutingModule
  ],
  declarations: [DetailedComponent]
})
export class DetailedModule { }
