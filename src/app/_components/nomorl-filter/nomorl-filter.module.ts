import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { NomorlFilterComponent } from './nomorl-filter.component';
import { MyDatePickerModule } from 'mydatepicker';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports:      [ MyDatePickerModule ,FormsModule],
    declarations: [ NomorlFilterComponent ],
    bootstrap:    [ NomorlFilterComponent ],
    exports:[NomorlFilterComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class NomorlFilterModule { }
