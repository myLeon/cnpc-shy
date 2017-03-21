import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { NomorlComponent } from './nomorl.component';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
    imports:      [ MyDatePickerModule ],
    declarations: [ NomorlComponent ],
    bootstrap:    [ NomorlComponent ]
})
export class NomorModule {} 