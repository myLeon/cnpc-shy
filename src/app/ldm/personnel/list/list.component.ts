import { Component, OnInit, Inject } from '@angular/core';
import { PersonnelService } from '../personnel.service';
import { ResponseEntity } from '../../../_entities/response-entity';
// import * as $ from 'jquery';
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

  //最近15天分析数据 图表区域 配置
  last15DaysAnalysisTaskOptinos;

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

   //个人分析项目量排名
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

  //分析人员占比
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

  //系统使用次数排名(（根据排版看能否做成根据时间查询）前10或前20)
  deviceBaseRunInfo: any = {
    title: {
      text: '某地区蒸发量和降水量',
      subtext: '纯属虚构'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['蒸发量', '降水量']
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ['line', 'bar'] },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    calculable: true,
    xAxis: [
      {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '蒸发量',
        type: 'bar',
        data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
        markPoint: {
          data: [
            { type: 'max', name: '最大值' },
            { type: 'min', name: '最小值' }
          ]
        },
        markLine: {
          data: [
            { type: 'average', name: '平均值' }
          ]
        }
      },
      {
        name: '降水量',
        type: 'bar',
        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
        markPoint: {
          data: [
            { name: '年最高', value: 182.2, xAxis: 7, yAxis: 183, symbolSize: 18 },
            { name: '年最低', value: 2.3, xAxis: 11, yAxis: 3 }
          ]
        },
        markLine: {
          data: [
            { type: 'average', name: '平均值' }
          ]
        }
      }
    ]
  }
  //构造
  constructor(
    @Inject('PersonnelService') private service: PersonnelService,
    private route: ActivatedRoute,
    private router: Router
  ) {

    this.service.getJqTask().subscribe(res => this.setJQTASK(res));
    this.service.getStaffTestCountInfo().subscribe(res => this.setStaffTestCountInfo(res));
    this.service.getAnalysisStaffRatioInfo().subscribe(res => this.setAnalysisStaffRatioInfo(res));
    this.service.getStaffUseLimsRunInfo().subscribe(res => this.setStaffUseLimsRunInfo(res));
    this.service.getLast15DaysAnalysisTask().subscribe(res => this.setLast15DaysAnalysisTask(res));
    this.service.getlimsValidUseInfo().subscribe(res => this.setlimsValidUseInfo(res));
  }

  ngOnInit() {
    this.route.parent.params
      .map(params => params['id'] || 'None')
      .subscribe(res => {
        this.urlParas.id = res;
      });
  }
  //设置最近15天分析任务数据
  setLast15DaysAnalysisTask(res: any) {
    console.log(res);
    this.last15DaysAnalysisTaskOptinos = res;
  }
  //人员列表台账
  setJQTASK(res: ResponseEntity) {
    console.log(res);
    if (!res.success) {
      this.jqTask = { status: "message", message: res.message };
      return;
    }
    if (res.data.length > 0) {
      this.gridData = res.data;
      this.basicData = res.data;
      this.jqTask = Object.assign(this.jqTask, { status: "success", rows: res.data });

    }
    else {
      this.jqTask = { status: "message", message: "无数据展示" };
    }
  }
  //个人分析项目量排名
  setStaffTestCountInfo(res: ResponseEntity) {
    console.log(res);
    if (!res.success) {
      this.subjectProgressInfo = { status: "message", message: res.message };
      return;
    }

    if (res.data.length > 0) {
      let series = [];
      res.data.forEach(element => {
        let model = {
          value: element.total,
          name: element.staffName
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
  //分析人员占比
  setAnalysisStaffRatioInfo(res: ResponseEntity) {
    console.log(res);
    if (!res.success) {
      this.deviceRunInfo = { status: "message", message: "服务器忙..." };
      return;
    }
    if (res.data.length > 0) {
      let series = [];
      res.data.forEach(element => {
        let model = {
          value: element.total,
          name: element.unitName
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
  //系统使用次数排名(（根据排版看能否做成根据时间查询）前10或前20)
  setStaffUseLimsRunInfo(res: ResponseEntity) {
    console.log(res);
    if (!res.success) {
      this.deviceBaseRunInfo = { status: "message", message: "服务器忙..." };
      return;
    }
    if (res.data.length > 0) {
      let series = [];
      res.data.forEach(element => {
        let model = {
          value: element.total,
          name: element.staffName
        }
        series.push(model);
      });

      this.deviceBaseRunInfo.status = "success";
      // this.deviceBaseRunInfo.option.series[0].data = series;
    }
    else {
      this.deviceBaseRunInfo = { status: "message", message: "无数据展示！" };
    }
  }

  //各单位LIMS系统有效使用率排名
  setlimsValidUseInfo(res: ResponseEntity) {
    console.log(res);
    if (!res.success) {
      this.deviceBaseRunInfo = { status: "message", message: "服务器忙..." };
      return;
    }
    if (res.data.length > 0) {
      let series = [];
      res.data.forEach(element => {
        let model = {
          value: element.total,
          name: element.staffName
        }
        series.push(model);
      });

      this.deviceBaseRunInfo.status = "success";
      // this.deviceBaseRunInfo.option.series[0].data = series;
    }
    else {
      this.deviceBaseRunInfo = { status: "message", message: "无数据展示！" };
    }
  }
  filterDataByKey(inputText: string) {
    console.log(inputText == "");
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

