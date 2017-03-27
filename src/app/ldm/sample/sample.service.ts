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
export class SampleService {

  // private api_url = 'http://localhost:3000';
  private api_url = "assets/localData/sample.json";
  private headers = new Headers({ 'Content-Type': 'application/json' });
  // data: any = null;
  constructor(private http: Http, private user: UserService) {

    console.log(this.user.getCurrentUser());
    

  }
  //一段时间内的不同单位的样品送检次数
  getsampleSendInspectAmount(): Observable<any> {
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
          data: ['固定床渣油加氢催化剂（PHR系列）工业应用试验', '固定床渣油加氢处理催化剂研究开发', '国V标准清洁汽柴油加氢催化剂开发与工业应用', '新型润滑油基础油异构脱蜡催化剂PIC-812的中试放大_11-05-02-01', '加氢裂化催化剂(PHC-03)工业应用试验_12-02B-02-01', 'C5/C6烷烃脱氢与混合C4芳构化组合技术的中试开发']
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
          name: '兰州中心样品量',
          type: 'bar',
          data: [67, 88, 78, 98, 100, 110],
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
      .map((response: Response) => response.json().sampleList as ResponseEntity)
      // .map((response: Response) => response.json() as ResponseEntity)
      .catch(this.handleError);
    return ret;
  }
   //一段时间内不同类型的样品分析量
  getsampleTypeAmount(): Observable<ResponseEntity> {
    //let url=`${this.api_url}/Subject`;
    let url = `${this.api_url}`;
    let ret = this.http.get(url)
      .map((response: Response) => response.json().sampleTypeAmount as ResponseEntity)
      .catch(this.handleError);
    return ret;
  }
  //一段时间内不同项目的分析次数
  getanalysisNameAmount(): Observable<ResponseEntity> {
    //let url=`${this.api_url}/device`;
    let url = `${this.api_url}`;
    let ret = this.http.get(url)
      .map((response: Response) => response.json().analysisNameAmount as ResponseEntity)
      .catch(this.handleError);
    return ret;
    // console.log(ret)
  }
  //一段时间内不同课题的样品分析次数
  getsampleLocationAmount(): Observable<ResponseEntity> {
    //let url=`${this.api_url}/deviceBase`;
    let url = `${this.api_url}`;
    let ret = this.http.get(url)
      .map((response: Response) => response.json().sampleLocationAmount as ResponseEntity)
      .catch(this.handleError);
    return ret;

  }


  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
