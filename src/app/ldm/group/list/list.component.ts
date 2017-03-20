import { Component, OnInit } from '@angular/core';
// import { MapService } from '../map.service';
import { EChartModule } from 'ng2-echarts-d3';
declare var $: any;
@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent {
    option: any = {};
    groud: any = {};
    constructor() {
    }

    ngOnInit() {



    }

}
