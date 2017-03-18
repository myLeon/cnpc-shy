import { Component, OnInit, Inject } from '@angular/core';
import { DeviceService } from '../device.service';
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

  //装置的基本信息
  device: any = {
    status: "before",
    message: "",
    data: []
  }

  //装置检查点
  deviceKeyPoint: any = {
    status: "before",
    message: ""
  }

  //装置的运行记录
  deviceRunRecord:any={
    status: "before",
    message: ""
  }
  //构造
  constructor(
    @Inject('DetailService') private service: DetailService,
    private route: ActivatedRoute,
    private router: Router
  ) {

    this.service.getDeviceModelInfo().subscribe(res => this.setDeviceModelInfo(res));
    this.service.getDeviceKeyPoint().subscribe(res => this.setDeviceKeyPoint(res));
    this.service.getDeviceRunRecord().subscribe(res => this.setDeviceRunRecord(res));
  }

  ngOnInit() {
    this.route.parent.params
      .map(params => params['id'] || 'None')
      .subscribe(res => {
        this.urlParas.id = res;
      });
  }

  //装置的基本信息
  setDeviceModelInfo(res: ResponseEntity) {
    if (!res.success) {
      this.device = { status: "message", message: res.message };
    }
    if (res.data.length > 0) {
      this.device.status = "success";
      this.device.data = res.data;
    }
    else {
      this.device = { status: "message", message: "无数据展示！" };
    }
  }

  //装置的检查点
  setDeviceKeyPoint(res: ResponseEntity) {
    if (!res.success) {
      this.deviceKeyPoint = { status: "message", message: res.message };
    }
    if (res.data.length > 0) {
      this.deviceKeyPoint = Object.assign(this.deviceKeyPoint, { status: "success", data: res.data });
    }
    else {
      this.deviceKeyPoint = { status: "message", message: "无数据展示！" };
    }
  }

  //装置的运行记录
  setDeviceRunRecord(res:ResponseEntity){
    if (!res.success) {
      this.deviceRunRecord = { status: "message", message: res.message };
    }
    if (res.data.length > 0) {
      this.deviceRunRecord = Object.assign(this.deviceRunRecord, { status: "success", data: res.data });
    }
    else {
      this.deviceRunRecord = { status: "message", message: "无数据展示！" };
    }
  }


}

