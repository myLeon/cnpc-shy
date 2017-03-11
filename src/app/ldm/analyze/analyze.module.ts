import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AnalyzeComponent } from './analyze.component';
import { Routing } from './analyze-routing.module';

@NgModule({
  imports: [
    CommonModule,
    Routing
  ],
  declarations: [AnalyzeComponent]
})
export class AnalyzeModule { }
