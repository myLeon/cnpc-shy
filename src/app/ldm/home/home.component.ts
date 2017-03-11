import { Component, OnInit, Inject } from '@angular/core';
import { HomeService } from './home.service';
import { ResponseEntity } from '../../_entities/response-entity';
// import * as $ from 'jquery';
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {


  urlParas:any={"id":"shy"};

  //最近15天分析数据 图表区域 配置
  last15DaysAnalysisTaskOptinos;

  //最近15天评价数据 图表区域 配置
  last15DaysAssessmentTaskOptions;

  //用户登录次数统计区域 参数配置
  userLoginCount: any = { rows: [], columns: [], status: "before", message: "" };

  //加氢任务区域配置
  jqTask: any = {
    rows: [],
    columns: [
      { title: '任务ID', name: 'identity', className: ['w80'] },
      { title: '任务名称', name: 'name', className: [''] },
      { title: '任务类型', name: 'tasktype', className: ['text-success', ''] },
      { title: '进度', name: 'process', className: ['text-warning', 'w80'] }
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
  subjectProgressInfo: any = {
    status: "before",
    message: "",
    option: {
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      calculable: true,
      series: [
        {
          name: '状态',
          type: 'pie',
          radius: '50%',
          center: ['50%', '50%'],
          data: []
        }
      ]
    }
  };

  //装置运行情况
  deviceRunInfo: any = {
    status: "before",
    message: "",
    option: {
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      calculable: true,
      series: [
        {
          name: '状态',
          type: 'pie',
          radius: '50%',
          center: ['50%', '50%'],
          data: []
        }
      ]
    }
  }

  // deviceRunInfo={
  //   ...
  //   this.subjectProgressInfo
  // }

  //装置基地任务运行情况
  deviceBaseRunInfo:any={
     status: "before",
    message: "",
    option: {
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      calculable: true,
      series: [
        {
          name: '任务量',
          type: 'pie',
          radius: '50%',
          center: ['50%', '50%'],
          data: []
        }
      ]
    }
  }
  //  constructor(private route: ActivatedRoute, private router: Router) {}

	//   ngOnInit() {
	//   this.route.params
	//     .map(params => params['filter'] || 'None')
	//     .subscribe(res=>{
	//           console.log(res);
	//    });
  //   }

  //private par:string = "sky";

  //构造
  constructor(
    @Inject('HomeService') private service: HomeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // let a = 123
    // console.log($.isNumeric(a));



    this.service.getJqTask().subscribe(res => this.setJQTASK(res));
    this.service.getUserLoginCount().subscribe(res => this.setUserLoginCount(res));
    this.service.getLast15DaysAnalysisTask().subscribe(res => this.setLast15DaysAnalysisTask(res));
    this.service.getLast15DaysAssessmentTask().subscribe(res => this.setLast15DaysAssessmentTask(res));
    this.service.getSubjectProgressInfo().subscribe(res => this.setSubjectProgressInfo(res));
    this.service.getDeviceRunInfo().subscribe(res => this.setDeviceRunInfo(res));
    this.service.getDeviceBaseRunInfo().subscribe(res=>this.setDeviceBaseRunInfo(res));
  }

  ngOnInit() {
     //this.route.parent.parent.data.subscribe(x => { console.log(x) });
    this.route.parent.params
	    .map(params => params['id'] || 'None')
	    .subscribe(res=>{

            this.urlParas.id=res;

	   });
    //  this.route.queryParams.subscribe(res=>{
    //    console.log(res);
    //  });
  }

  //设置最近15天分析任务数据
  setLast15DaysAnalysisTask(res: any) {
    this.last15DaysAnalysisTaskOptinos = res;
  }

  //设置最近15天评价任务数据
  setLast15DaysAssessmentTask(res: any) {

    this.last15DaysAssessmentTaskOptions = res;
  }

  //设置用户统计区域数据
  setUserLoginCount(res: ResponseEntity) {

    if (!res.success) {
      this.userLoginCount = { status: "message", message: res.message };
      return;
    }

    if (res.data.length > 0) {
      var columns = [
        { "field": "IDENTITY", "title": "编号" },
        { "field": "NAME" },
        { "field": "TOTAL" }
      ];
      this.userLoginCount = Object.assign(this.userLoginCount, { status: "success", rows: res.data, columns: columns });
    }
    else {
      this.userLoginCount = { status: "message", message: "无数据展示" };
    }
  }

  //设置加氢任务数据
  setJQTASK(res: ResponseEntity) {
    if (!res.success) {
      this.jqTask = { status: "message", message: res.message };
      return;
    }
    if (res.data.length > 0) {
      this.jqTask = Object.assign(this.jqTask, { status: "success", rows: res.data });
      //console.log(this.jqTask)
    }
    else {
      this.jqTask = { status: "message", message: "无数据展示" };
    }
  }

  setSubjectProgressInfo(res: ResponseEntity) {
    if (!res.success) {
      this.subjectProgressInfo = { status: "message", message: res.message };
      return;
    }

    if (res.data.length > 0) {
      let series = [];
      res.data.forEach(element => {
        let model = {
          value: element.total,
          name: element.typeName
        }
        series.push(model);
      });
      this.subjectProgressInfo.status = "success";
      this.subjectProgressInfo.option.series[0].data = series;


    }
    else {
      this.subjectProgressInfo = { status: "message", message: "无数据展示！" };
    }
  }

  setDeviceRunInfo(res: ResponseEntity) {
    if (!res.success) {
      this.deviceRunInfo = { status: "message", message: "服务器忙..." };
      return ;
    }
    if (res.data.length > 0) {
      let series = [];
      res.data.forEach(element => {
        let model = {
          value: element.total,
          name: element.typeName
        }
        series.push(model);
      });

      this.deviceRunInfo.status = "success";
      this.deviceRunInfo.option.series[0].data = series;
    }
    else {
      this.deviceRunInfo = { status: "message", message: "无数据展示！" };
    }
  }

  setDeviceBaseRunInfo(res:ResponseEntity){
     if (!res.success) {
      this.deviceBaseRunInfo = { status: "message", message: "服务器忙..." };
      return ;
    }
    if (res.data.length > 0) {
      let series = [];
      res.data.forEach(element => {
        let model = {
          value: element.total,
          name: element.baseName
        }
        series.push(model);
      });

      this.deviceBaseRunInfo.status = "success";
      this.deviceBaseRunInfo.option.series[0].data = series;
    }
    else {
      this.deviceBaseRunInfo = { status: "message", message: "无数据展示！" };
    }
  }





}
