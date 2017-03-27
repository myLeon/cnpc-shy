import { CommonModule } from '@angular/common';
import { NomorlLateFilterComponent } from './nomorl-late-filter.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { MyDatePickerModule } from 'mydatepicker';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    MyDatePickerModule,
    FormsModule
  ],
  declarations: [NomorlLateFilterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NomorlLateFilterModule { }
