import { Component, OnInit , Inject} from '@angular/core';
import { EChartModule } from 'ng2-echarts-d3';
import * as $ from 'jquery';
import{ GroupTreeEntity} from '../../../_entities/group-entity'
import { ActivatedRoute, Router } from "@angular/router";
import { ListService} from './list.service'

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent {
    option: any = {};
    groud: any = {};
    //最近15天分析数据 图表区域 配置
    last15DaysAnalysisTaskOptinos;
    constructor( @Inject('ListService') private service: ListService,
    private route: ActivatedRoute,
    private router: Router) {
    this.service.getLast15DaysAnalysisTask().subscribe(res => this.setLast15DaysAnalysisTask(res));
    }
    ngOnInit() {
    }
    setLast15DaysAnalysisTask(res: any) {
    this.last15DaysAnalysisTaskOptinos = res;
    console.log(this.last15DaysAnalysisTaskOptinos);
    }
}

