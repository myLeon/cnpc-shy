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

  urlParas: any = { "id": "shy" };

  //最近15天分析数据 图表区域 配置
  analysis;
  //装置列表
  staffList: any = {
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
  //个人分析样品量排名
  staffAnalysisCount: any = {
    status: "before",
    message: ""
  }
  //个人分析项目量排名
  staffTestCount: any = {
    status: "before",
    message: ""
  };
  //分析人员占比
  analysisStaffRatio: any = {
    status: "before",
    message: ""
  }
  //系统使用次数排名(（根据排版看能否做成根据时间查询）前10或前20)
  staffUseLims: any = {
    status: "before",
    message: ""
  }
  //各单位LIMS系统有效使用率排名
  limsValidUse: any = {
    status: "before",
    message: ""

  }
  //构造
  constructor(
    @Inject('PersonnelService') private service: PersonnelService,
    private route: ActivatedRoute,
    private router: Router
  ) {

    this.service.getStaffList().subscribe(res => this.setStaffList(res));
    this.service.getStaffAnalysisCountInfo().subscribe(res => this.setStaffAnalysisCountInfo(res));
    this.service.getStaffTestCountInfo().subscribe(res => this.setStaffTestCountInfo(res));
    this.service.getAnalysisStaffRatioInfo().subscribe(res => this.setAnalysisStaffRatioInfo(res));
    this.service.getStaffUseLimsRunInfo().subscribe(res => this.setStaffUseLimsRunInfo(res));
    this.service.getlimsValidUseInfo().subscribe(res => this.setlimsValidUseInfo(res));
    this.service.getanalysisStaffRatio().subscribe(res => this.setanalysisStaffRatio(res));

  }
  //设置最近15天分析任务数据
  setanalysisStaffRatio(res: any) {
    this.analysis = res;
    console.log(this.analysis)
  }
  ngOnInit() {
    this.route.parent.params
      .map(params => params['id'] || 'None')
      .subscribe(res => {
        this.urlParas.id = res;
      });
  }

  //人员列表台账
  setStaffList(res: ResponseEntity) {
    console.log(res);
    if (!res.success) {
      this.staffList = { status: "message", message: res.message };
      return;
    }
    if (res.data.length > 0) {
      this.gridData = res.data;
      this.basicData = res.data;
      this.staffList = Object.assign(this.staffList, { status: "success", rows: res.data });

    }
    else {
      this.staffList = { status: "message", message: "无数据展示" };
    }
  }
  //个人分析项目量排名
  setStaffTestCountInfo(res: ResponseEntity) {
     console.log(res);
    if (!res.success) {
      this.staffTestCount = { status: "message", message: res.message };
      return;
    }
    if (res.data.length > 0) {
      this.staffTestCount = Object.assign(this.staffTestCount, { status: "success", data: res.data });
    }
    else {
      this.staffTestCount = { status: "message", message: "无数据展示！" };
    }
  }
  //个人分析样品量排名(（根据排版看能否做成根据时间查询）前10或20)
  setStaffAnalysisCountInfo(res: ResponseEntity) {
    console.log(res);
    if (!res.success) {
      this.staffAnalysisCount = { status: "message", message: res.message };
      return;
    }
    if (res.data.length > 0) {
      this.staffAnalysisCount = Object.assign(this.staffAnalysisCount, { status: "success", data: res.data });
    }
    else {
      this.staffAnalysisCount = { status: "message", message: "无数据展示！" };
    }
  }
  //分析人员占比
  setAnalysisStaffRatioInfo(res: ResponseEntity) {
      console.log(res);
    if (!res.success) {
      this.analysisStaffRatio = { status: "message", message: res.message };
      return;
    }
    if (res.data.length > 0) {
      this.analysisStaffRatio = Object.assign(this.analysisStaffRatio, { status: "success", data: res.data });
    }
    else {
      this.analysisStaffRatio = { status: "message", message: "无数据展示！" };
    }
   
  }
  //各单位LIMS系统有效使用率排名
  setlimsValidUseInfo(res: ResponseEntity) {
    console.log(res);
    if (!res.success) {
      this.limsValidUse = { status: "message", message: res.message };
      return;
    }
    if (res.data.length > 0) {
      this.limsValidUse = Object.assign(this.limsValidUse, { status: "success", data: res.data });
    }
    else {
      this.limsValidUse = { status: "message", message: "无数据展示！" };
    }
  }
  //系统使用次数排名(（根据排版看能否做成根据时间查询）前10或前20)
  setStaffUseLimsRunInfo(res: ResponseEntity) {
    console.log(res);
    if (!res.success) {
      this.staffUseLims = { status: "message", message: res.message };
      return;
    }
    if (res.data.length > 0) {
      this.staffUseLims = Object.assign(this.staffUseLims, { status: "success", data: res.data });
    }
    else {
      this.staffUseLims = { status: "message", message: "无数据展示！" };
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

