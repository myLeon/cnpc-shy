import { Component, OnInit, Inject } from '@angular/core';
import { SampleService } from '../sample.service';
import { ResponseEntity } from '../../../_entities/response-entity';
import { ActivatedRoute, Router } from "@angular/router";
import { filterBy } from '@progress/kendo-data-query';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  gridData: any[];

  basicData: any[];

  //一段时间内的不同单位的样品送检次数
  sampleSendInspectAmount;

  userLoginCount: any = { rows: [], columns: [], status: "before", message: "" };

  urlParas: any = { "id": "shy" };



  //装置列表
  jqTask: any = {
    rows: [],
    columns: [
      { title: '装置编号', name: 'identity', className: ['w80'] },
      { title: '装置名称', name: 'name', className: [''] },
      { title: '装置类型', name: 'locationType', className: ['text-success', ''] },
      { title: '联系人', name: 'operatorId', className: ['text-warning', 'w80'] }
    ],
    config: {
      paging: true,
      filtering: { filterString: '' },
      className: ['table-striped', 'table-bordered']
    },
    status: "before",
    message: ""
  };

  //一段时间内不同项目的分析次数
  analysisNameAmount: any = {
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

  //一段时间内不同类型的样品分析量
  sampleTypeAmount: any = {
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

  //一段时间内不同课题的样品分析次数
  sampleLocationAmount: any = {
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
  //构造
  constructor(
    @Inject('SampleService') private service: SampleService,
    private route: ActivatedRoute,
    private router: Router
  ) {

    // let a = 123
    // console.log($.isNumeric(a));
    this.service.getJqTask().subscribe(res => this.setJQTASK(res));
    this.service.getsampleTypeAmount().subscribe(res => this.setsampleTypeAmount(res));
    this.service.getanalysisNameAmount().subscribe(res => this.setanalysisNameAmount(res));
    this.service.getsampleLocationAmount().subscribe(res => this.setsampleLocationAmount(res));
    this.service.getsampleSendInspectAmount().subscribe(res => this.setsampleSendInspectAmount(res));

  }

  ngOnInit() {
    //this.route.parent.parent.data.subscribe(x => { console.log(x) });
    this.route.parent.params
      .map(params => params['id'] || 'None')
      .subscribe(res => {

        this.urlParas.id = res;

      });
  }
  //一段时间内的不同单位的样品送检次数
  setsampleSendInspectAmount(res: any) {
    this.sampleSendInspectAmount = res;
  }
  //申请的任务台账列表
  setJQTASK(res: ResponseEntity) {
    console.log(res.data)
    if (!res.success) {
      this.jqTask = { status: "message", message: res.message };
      return;
    }
    if (res.data.length > 0) {
      console.log(111)
      this.gridData = res.data;
      this.basicData = res.data;
      console.log(this.basicData)
      this.jqTask = Object.assign(this.jqTask, { status: "success", rows: res.data });

    }
    else {
      this.jqTask = { status: "message", message: "无数据展示" };
    }
  }
  //一段时间内不同课题的样品分析次数
  setsampleLocationAmount(res: ResponseEntity) {
    console.log(res)
    if (!res.success) {
      this.sampleLocationAmount = { status: "message", message: res.message };
      return;
    }
    if (res.data.length > 0) {
      let series = [];
      res.data.forEach(element => {
        let model = {
          value: element.total,
          name: element.subjectName
        }
        series.push(model);
      });
       this.sampleLocationAmount.status = "success";
      this.sampleLocationAmount.option.series[0].data = series;
    }
    else {
      this.sampleLocationAmount = { status: "message", message: "无数据展示！" };
    }
  }
  //一段时间内不同项目的分析次数
  setanalysisNameAmount(res: ResponseEntity) {
    console.log(res)
    if (!res.success) {
      this.analysisNameAmount = { status: "message", message: "服务器忙..." };
      return;
    }
    if (res.data.length > 0) {
      let series = [];
      res.data.forEach(element => {
        let model = {
          value: element.total,
          name: element.analysisName
        }
        series.push(model);
      });

      this.analysisNameAmount.status = "success";
      this.analysisNameAmount.option.series[0].data = series;
    }
    else {
      this.analysisNameAmount = { status: "message", message: "无数据展示！" };
    }
  }
  //一段时间内不同类型的样品分析量
  setsampleTypeAmount(res: ResponseEntity) {
    console.log(res)
    if (!res.success) {
      this.sampleTypeAmount = { status: "message", message: "服务器忙..." };
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

      this.sampleTypeAmount.status = "success";
      this.sampleTypeAmount.option.series[0].data = series;
    }
    else {
      this.sampleTypeAmount = { status: "message", message: "无数据展示！" };
    }
  }

  filterDataByKey(inputText: string) {
    console.log(inputText);
    if (inputText != "") {
      var dataArray = [...this.basicData];

      let result = filterBy(dataArray, {
        logic: 'or',
        filters: [
          {
            field: "identity",
            operator: "contains",
            value: inputText
          },
          {
            field: "description",
            operator: "contains",
            value: inputText
          },
          {
            field: "locationType",
            operator: "contains",
            value: inputText
          },
          {
            field: "locationDept",
            operator: "contains",
            value: inputText
          },
          {
            field: "operatorId",
            operator: "contains",
            value: inputText
          }
        ]
      });
      this.gridData = result;
    }
    else {
      this.gridData = this.basicData;
    }
  }
}

