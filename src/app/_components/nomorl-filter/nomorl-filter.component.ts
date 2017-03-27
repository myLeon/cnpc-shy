import { Component, OnInit } from '@angular/core';
import { IMyOptions } from 'mydatepicker';

@Component({
  selector: 'app-nomorl-filter',
  templateUrl: './nomorl-filter.component.html',
  styleUrls: ['./nomorl-filter.component.scss']
})
export class NomorlFilterComponent implements OnInit {


  private BeginmyDatePickerOptions: IMyOptions = {
    // other options...
    dateFormat: 'yyyy-mm-dd',
    dayLabels: { su: '周日', mo: '周一', tu: '周二', we: '周三', th: '周四', fr: '周五', sa: '周六' },
    showTodayBtn: true,
    monthLabels: { 1: '一月', 2: '二月', 3: '三月', 4: '四月', 5: '五月', 6: '六月', 7: '七月', 8: '八月', 9: '九月', 10: '十月', 11: '十一月', 12: '十二月' },
    height: '30px',
    width: '140px',
    openSelectorOnInputClick: true,
    todayBtnTxt: '今天',
    showClearDateBtn: false,
    showWeekNumbers: true,
    inline: false,
    selectionTxtFontSize: <string>"14px",
  };

  private EndmyDatePickerOptions: IMyOptions = {
    // other options...
    dateFormat: 'yyyy-mm-dd',
    dayLabels: { su: '周日', mo: '周一', tu: '周二', we: '周三', th: '周四', fr: '周五', sa: '周六' },
    showTodayBtn: true,
    monthLabels: { 1: '一月', 2: '二月', 3: '三月', 4: '四月', 5: '五月', 6: '六月', 7: '七月', 8: '八月', 9: '九月', 10: '十月', 11: '十一月', 12: '十二月' },
    height: '30px',
    width: '140px',
    openSelectorOnInputClick: true,
    todayBtnTxt: '今天',
    showClearDateBtn: false,
    showWeekNumbers: true,
    inline: false,
    selectionTxtFontSize: <string>"14px",
  };

  // Initialized to specific date (09.10.2018).
  private start: Object = {
    date: { year: 2017, month: 3, day: 22 }
  };


  private end: Object = {
    date: { year: 2017, month: 3, day: 22 }
  };

  constructor() { }

  ngOnInit() {
  }

}
