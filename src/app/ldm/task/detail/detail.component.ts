import { Component, OnInit, Inject } from '@angular/core';
import { SampleService } from '../sample.service';
import { ResponseEntity } from '../../../_entities/response-entity';
// import * as $ from 'jquery';
import {DetailService} from './detail.service'
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

export class DetailComponent implements OnInit {
    //最近15天分析数据 图表区域 配置
  last15DaysAnalysisTaskOptinos;

  userLoginCount: any = { rows: [], columns: [], status: "before", message: "" };

  urlParas:any={"id":"shy"};

  

  //装置列表
  jqTask: any = {
    rows: [],
    columns: [
      { title: '装置编号', name: 'identity', className: ['w80'] },
      { title: '装置名称', name: 'name', className: [''] },
      { title: '装置类型', name: 'locationType', className: ['text-success', ''] },
      { title: '联系人', name: 'operatorId', className: ['text-warning', 'w80'] },
      { title: '装置编号', name: 'identity', className: ['w80'] },
      { title: '装置名称', name: 'name', className: [''] },
      { title: '装置类型', name: 'locationType', className: ['text-success', ''] },
      { title: '联系人', name: 'operatorId', className: ['text-warning', 'w80'] },
      { title: '联系人', name: 'operatorId', className: ['text-warning', 'w80'] },
    ],
    config: {
      paging: true,
      filtering: { filterString: '' },
      className: ['table-striped', 'table-bordered']
    },
    status: "before",
    message: ""
  };

  //课题进展情况
  analysisTask: any = {
    rows: [],
    columns: [
      { title: '装置编号', name: 'identity', className: ['w80'] },
      { title: '装置日期', name: 'name', className: [''] },
      { title: '装置评价', name: 'locationType', className: ['text-success', ''] },
      { title: '装置生产日期', name: 'operatorId', className: ['text-warning', 'w80'] },
      { title: '装置状态', name: 'operatorId', className: ['text-warning', 'w80'] },
      { title: '装置配置', name: 'operatorId', className: ['text-warning', 'w80'] },
      { title: '装置规格', name: 'operatorId', className: ['text-warning', 'w80'] }
    ],
    config: {
      paging: true,
      filtering: { filterString: '' },
      className: ['table-striped', 'table-bordered']
    },
    status: "before",
    message: ""
  };
  deviceRunRecordTask: any = {
    rows: [],
    columns: [
      { title: '装置编号', name: 'identity', className: ['w80'] },
      { title: '装置日期', name: 'name', className: [''] },
      { title: '装置评价', name: 'locationType', className: ['text-success', ''] },
      { title: '装置生产日期', name: 'operatorId', className: ['text-warning', 'w80'] },
      { title: '装置状态', name: 'operatorId', className: ['text-warning', 'w80'] },
      { title: '装置配置', name: 'operatorId', className: ['text-warning', 'w80'] },
      { title: '装置规格', name: 'operatorId', className: ['text-warning', 'w80'] }
    ],
    config: {
      paging: true,
      filtering: { filterString: '' },
      className: ['table-striped', 'table-bordered']
    },
    status: "before",
    message: ""
  };
  //构造
  constructor(
    @Inject('DetailService') private service: DetailService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.service.getJqTask().subscribe(res => this.setJQTASK(res));
    this.service.getAnalysisTask().subscribe(res => this.setAnalysisTask(res));
    // this.service.getDeviceRunRecord().subscribe(res => this.setDeviceRunRecord(res));
    // console.log(this.analysisTask)
    // console.log(this.jqTask)
  }

  ngOnInit() {
    this.route.parent.params
	    .map(params => params['id'] || 'None')
	    .subscribe(res=>{
            this.urlParas.id=res;
	   });
  }
  //设置加氢任务数据
  setJQTASK(res: ResponseEntity) {
    console.log(res);
    if (!res.success) {
      this.jqTask = { status: "message", message: res.message };
      return;
    }
    if (res.data.length > 0) {


      this.jqTask = Object.assign(this.jqTask, { status: "success", rows: res.data });
      this.jqTask.status = "success";
    }
    else {
      this.jqTask = { status: "message", message: "无数据展示" };
    }
  }
  setAnalysisTask(res: ResponseEntity) {
    console.log(res);
    if (!res.success) {
      this.analysisTask = { status: "message", message: res.message };
      return;
    }

    if (res.data.length > 0) {
      this.analysisTask = Object.assign(this.analysisTask, { status: "success", rows: res.data });
      this.analysisTask.status = "success";
      // this.subjectProgressInfo.option.series[0].data = series;
    }
    else {
      this.analysisTask = { status: "message", message: "无数据展示！" };
    }
  }
  setDeviceRunRecord(res: ResponseEntity) {
    console.log(res);
    if (!res.success) {
      this.deviceRunRecordTask = { status: "message", message: res.message };
      return;
    }

    if (res.data.length > 0) {
      this.deviceRunRecordTask = Object.assign(this.analysisTask, { status: "success", rows: res.data });
      this.deviceRunRecordTask.status = "success";
      // this.subjectProgressInfo.option.series[0].data = series;


    }
    else {
      this.deviceRunRecordTask = { status: "message", message: "无数据展示！" };
    }
  }
}

