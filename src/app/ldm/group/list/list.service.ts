import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { ResponseEntity } from '../../../_entities/response-entity';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import {UserService } from '../../../_core/user.service';

@Injectable()
export class ListService {

  constructor() { }
  getLast15DaysAnalysisTask():Observable<any> {
    let chartData = {
      theme: "infographic",
      title: { top: '10px', left: '10px', text: '最近15天分析样品量统计', subtext: '测试数据' },
      tooltip: { trigger: 'axis' },
      legend: { top: '10px', data: ['兰州中心样品量', '大庆中心样品量'] },
      grid: { top: '65px', left: '20px', right: '40px', bottom: '30px', containLabel: true },
      toolbox: {
        top: '10px', right: '10px', show: true,
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
          data: ['12-28', '12-29', '12-30', '12-31', '01-01', '01-02', '01-03', '01-04', '01-05', '01-06', '01-07', '01-08', '01-09', '01-10', '01-11']
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisLabel: {
            formatter: '{value}个'
          }

        }
      ],
      series: [
        {
          name: '大庆中心样品量',
          type: 'bar',
          data: [100, 90, 95, 56, 78, 76, 135, 162, 32, 110, 120, 109, 56, 76, 55],
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
          name: '兰州中心样品量',
          type: 'bar',
          data: [67, 88, 78, 98, 100, 110, 99, 95, 76, 84, 86, 120, 130, 170, 50,],
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
        }
      ]

    };
    let bs=new BehaviorSubject<any>(chartData);
    return bs.asObservable();
    //return Observable.of(chartData);
  }

}
