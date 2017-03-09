import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrganizationComponent } from './organization.component';
import { Routing } from './organization-routing.module';

@NgModule({
  imports: [
    CommonModule,
    Routing
  ],
  declarations: [OrganizationComponent]
})
export class OrganizationModule { }
