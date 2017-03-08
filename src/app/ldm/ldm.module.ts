import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routing } from './ldm-routing.module';
import { LdmComponent } from './ldm.component';
import { HomeComponent } from './home/home.component';
import { TickerModule } from '../_directives/ticker/ticker.module';

import { SimpleTableModule } from '../_components/simple-table/simple-table.module';

@NgModule({
  imports: [
    CommonModule,
    Routing,
    TickerModule,
    SimpleTableModule
  ],
  declarations: [LdmComponent, HomeComponent]
})
export class LdmModule { }
