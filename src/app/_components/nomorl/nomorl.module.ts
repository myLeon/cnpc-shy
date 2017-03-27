import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { NomorlComponent } from './nomorl.component';
import { MyDatePickerModule } from 'mydatepicker';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports:      [ MyDatePickerModule ,FormsModule],
    declarations: [ NomorlComponent ],
    bootstrap:    [ NomorlComponent ],
    exports:[NomorlComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NomorModule {} 