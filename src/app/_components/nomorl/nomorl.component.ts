import { Component, OnInit } from '@angular/core';
import {IMyOptions} from 'mydatepicker';

@Component({
  selector: 'app-nomorl',
  templateUrl: './nomorl.component.html',
  styleUrls: ['./nomorl.component.scss']
})
export class NomorlComponent implements OnInit {
  private myDatePickerOptions: IMyOptions = {
        // other options...
        dateFormat: 'dd.mm.yyyy',
    };

    // Initialized to specific date (09.10.2018).
    private model: Object = { date: { year: 2018, month: 10, day: 9 } };

  constructor() { }

  ngOnInit() {
  }

}

// other imports here...

export class MyTestApp {

   
}
