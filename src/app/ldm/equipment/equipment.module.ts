import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentComponent } from './equipment.component'
import { Routing } from './equipment-routing.module';

@NgModule({
  imports: [
    CommonModule,
    Routing
  ],
  declarations: [EquipmentComponent]
})
export class EquipmentModule { }
