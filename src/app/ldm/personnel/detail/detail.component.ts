import { Component, OnInit, Inject } from '@angular/core';
// import {  } from '../personnel.service';
import { ResponseEntity } from '../../../_entities/response-entity';
// import * as $ from 'jquery';
import { DetailService } from './detail.service'
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

export class DetailComponent implements OnInit {
  //必须存在的
  urlParas: any = { "id": "shy" };

  //人员详情
  staffModel: any = {
    status: "before",
    message: "",
    data: []
  }

  //一段时间内分析的样品、项目量
  analysisAmount: any = {
    status: "before",
    message: "",
    data: []
  }

  
  //所申请评价任务
  subjectRole: any = {
    status: "before",
    message: "",
    data: []
  }
  //课题授权
  applyTask: any = {
    status: "before",
    message: "",
    data: []
  }
  //构造
  constructor(
    @Inject('DetailService') private service: DetailService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.service.getStaffModel().subscribe(res => this.setStaffModel(res));
    this.service.getAnalysisAmount().subscribe(res => this.setAnalysisAmount(res));
    this.service.getSubjectRole().subscribe(res => this.setSubjectRole(res));
    this.service.getApplyTask().subscribe(res => this.setApplyTask(res));
  }
  ngOnInit() {
    this.route.parent.params
      .map(params => params['id'] || 'None')
      .subscribe(res => {
        this.urlParas.id = res;
      });
  }

  //人员详情
  setStaffModel(res: ResponseEntity) {
    console.log(res)
    console.log(res.success)
    if (!res.success) {
      this.staffModel = { status: "message", message: res.message };
    }
    if (res.data.length > 0) {
       this.analysisAmount = Object.assign(this.analysisAmount, { status: "success", data: res.data });
    }
    else {
      this.staffModel = { status: "message", message: "无数据展示！" };
    }
  }

  //一段时间内分析的样品、项目量
  setAnalysisAmount(res: ResponseEntity) {
    console.log(res.success)
    console.log(res)
    if (!res.success) {
      this.analysisAmount = { status: "message", message: res.message };
    }
    if (res.data.length > 0) {
      this.analysisAmount = Object.assign(this.analysisAmount, { status: "success", data: res.data });
      console.log(this.analysisAmount)
    }
    else {
      this.analysisAmount = { status: "message", message: "无数据展示！" };
      console.log(this.analysisAmount)
    }
  }

  //所申请评价任务 
  setSubjectRole(res: ResponseEntity) {
    console.log(res.data)
    if (!res.success) {
      this.subjectRole = { status: "message", message: res.message };
    }
    if (res.data.length > 0) {
      this.subjectRole = Object.assign(this.subjectRole, { status: "success", data: res.data });
    }
    else {
      this.subjectRole = { status: "message", message: "无数据展示！" };
    }
  }
  
  //课题授权
  setApplyTask(res: ResponseEntity) {
    console.log(res)
    if (!res.success) {
      this.applyTask = { status: "message", message: res.message };
    }
    if (res.data.length > 0) {
      this.applyTask = Object.assign(this.applyTask, { status: "success", data: res.data });
    }
    else {
      this.applyTask = { status: "message", message: "无数据展示！" };
    }
  }

}

