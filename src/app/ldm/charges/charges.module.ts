import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChargesComponent } from './charges.component';
import { Routing } from './charges-routing.module';

@NgModule({
  imports: [
    CommonModule,
    Routing
  ],
  declarations: [ChargesComponent]
})
export class ChargesModule { }
