import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { ResponseEntity } from '../../_entities/response-entity';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import { UserService } from '../../_core/user.service';


@Injectable()
export class TaskService {

  // private api_url = 'http://localhost:3000';
  private api_url = "assets/localData/task.json";
  private headers = new Headers({ 'Content-Type': 'application/json' });
  // data: any = null;
  constructor(private http: Http, private user: UserService) {

    console.log(this.user.getCurrentUser());
    

  }
  getLast15DaysAnalysisTask(): Observable<any> {
    let chartData = {
      theme: "infographic",
      title: { top: '10px', left: '10px', text: '', subtext: '' },
      tooltip: { trigger: 'axis' },
      legend: { top: '10px', data: ['', ''] },
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
          data: ['DQ_LYS107', 'LZ_CHS08', 'LZ_CHS04', 'LZ_LZS03_8', 'LZ_LHS05', 'LZ_CHS05', 'LZ_JXT07', 'LZ_LZS03_7', 'LZ_LZS03_4', 'LZ_LHS04', 'LZ_HHS02', 'LZ_JXT03', 'LZ_PP02', 'LZ_CHS09', 'LZ_JXT06', 'LZ_LHS03', 'DQ_SZS806']
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
    let bs = new BehaviorSubject<any>(chartData);
    return bs.asObservable();
    //return Observable.of(chartData);
  }
  //申请的任务台账列表
  getJqTask(): Observable<ResponseEntity> {
    //let url = `${this.api_url}/home_JqTask`;
    let url = `${this.api_url}`;
    let ret = this.http.get(url)
      .map((response: Response) => response.json().taskApplyList as ResponseEntity)
      // .map((response: Response) => response.json() as ResponseEntity)
      .catch(this.handleError);
    return ret;
  }
   //一段时间内的科研课题申请次数统计
  getClassificationInfo(): Observable<ResponseEntity> {
    //let url=`${this.api_url}/Subject`;
    let url = `${this.api_url}`;
    let ret = this.http.get(url)
      .map((response: Response) => response.json().taskSubjectApplyAmount as ResponseEntity)
      .catch(this.handleError);
    return ret;
  }
  //一段时间内的不同单位的申请次数统计
  getInstrumentStatisticsInfo(): Observable<ResponseEntity> {
    //let url=`${this.api_url}/device`;
    let url = `${this.api_url}`;
    let ret = this.http.get(url)
      .map((response: Response) => response.json().taskGroupApplyAmount as ResponseEntity)
      .catch(this.handleError);
    return ret;
    // console.log(ret)
  }
  //一段时间内每天的任务申请次数统计
  getInstrumentUtilizationInfo(): Observable<ResponseEntity> {
    //let url=`${this.api_url}/deviceBase`;
    let url = `${this.api_url}`;
    let ret = this.http.get(url)
      .map((response: Response) => response.json().taskEveryDayApplyAmount as ResponseEntity)
      .catch(this.handleError);
    return ret;

  }


  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
