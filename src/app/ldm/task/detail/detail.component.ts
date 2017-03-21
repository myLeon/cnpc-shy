import { Component, OnInit, Inject } from '@angular/core';
import { ResponseEntity } from '../../../_entities/response-entity';
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

  //仪器设备实体
  instument: any = {
    status: "before",
    message: "",
    data: []
  }

  //一段时间内分析的样品数、项目数
  instrumentAnalysisAmount: any = {
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

    this.service.getInstrumentModelInfo().subscribe(res => this.SetInstrumentModelInfo(res));
    this.service.getStrumentAnalysisAmount().subscribe(res => this.SetStrumentAnalysisAmount(res));

  }

  ngOnInit() {
    this.route.parent.params
      .map(params => params['id'] || 'None')
      .subscribe(res => {
        this.urlParas.id = res;
      });
  }

  //仪器设备实体
  SetInstrumentModelInfo(res: ResponseEntity) {
    console.log(res.data)
    if (!res.success) {
      this.instument = { status: "message", message: res.message };
    }
    if (res.data.length > 0) {
      this.instument.status = "success";
      this.instument.data = res.data;
    }
    else {
      this.instument = { status: "message", message: "无数据展示！" };
    }
  }

  //一段时间内分析的样品数、项目数
  SetStrumentAnalysisAmount(res: ResponseEntity) {
    console.log(res)
    if (!res.success) {
      this.instrumentAnalysisAmount = { status: "message", message: res.message };
    }
    if (res.data.length > 0) {
      this.instrumentAnalysisAmount = Object.assign(this.instrumentAnalysisAmount, { status: "success", data: res.data });
    }
    else {
      this.instrumentAnalysisAmount = { status: "message", message: "无数据展示！" };
    }
  }
}


