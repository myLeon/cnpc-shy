import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routing } from './device-routing.module';
import { DeviceComponent } from './device.component';

@NgModule({
  imports: [
    CommonModule,
    Routing
  ],
  declarations: [DeviceComponent]
})
export class DeviceModule { }

