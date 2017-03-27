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
export class PersonnelService {

  // private api_url = 'http://localhost:3000';
  private api_url = "assets/localData/personnel.json";
  private headers = new Headers({ 'Content-Type': 'application/json' });
  // data: any = null;
  constructor(private http: Http, private user: UserService) {

    console.log(this.user.getCurrentUser());


  }
  getanalysisStaffRatio(): Observable<any> {
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
          data: ['总人数266', '总人数263','总人数197']
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisLabel: {
            formatter: '{value}'
          }

        }
      ],
      series: [
        {
          name: '分析人员占比',
          type: 'bar',
          data: [120, 90, 50],
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
          name: '各单位LIMS系统有效使用率排名',
          type: 'bar',
          data: [120, 50, 50],
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
  }
  //人员列表台账
  getStaffList(): Observable<ResponseEntity> {
    let url = `${this.api_url}`;
    let ret = this.http.get(url)
      .map((response: Response) => response.json().staffList as ResponseEntity)
      .catch(this.handleError);
    return ret;
  }
  //个人分析样品量排名
  getStaffAnalysisCountInfo(): Observable<ResponseEntity> {
    //let url=`${this.api_url}/Subject`;
    let url = `${this.api_url}`;
    let ret = this.http.get(url)
      .map((response: Response) => response.json().staffAnalysisCount as ResponseEntity)
      .catch(this.handleError);
    return ret;
  }
  //个人分析项目量排名
  getStaffTestCountInfo(): Observable<ResponseEntity> {
    //let url=`${this.api_url}/Subject`;
    let url = `${this.api_url}`;
    let ret = this.http.get(url)
      .map((response: Response) => response.json().staffTestCount as ResponseEntity)
      .catch(this.handleError);
    return ret;
  }
  //分析人员占比
  getAnalysisStaffRatioInfo(): Observable<ResponseEntity> {
    //let url=`${this.api_url}/device`;
    let url = `${this.api_url}`;
    let ret = this.http.get(url)
      .map((response: Response) => response.json().analysisStaffRatio as ResponseEntity)
      .catch(this.handleError);
    return ret;
    // console.log(ret)
  }
  //系统使用次数排名(（根据排版看能否做成根据时间查询）前10或前20)
  getStaffUseLimsRunInfo(): Observable<ResponseEntity> {
    //let url=`${this.api_url}/deviceBase`;
    let url = `${this.api_url}`;
    let ret = this.http.get(url)
      .map((response: Response) => response.json().staffUseLims as ResponseEntity)
      .catch(this.handleError);
    return ret;

  }
  //各单位LIMS系统有效使用率排名
  getlimsValidUseInfo(): Observable<ResponseEntity> {
    //let url=`${this.api_url}/deviceBase`;
    let url = `${this.api_url}`;
    let ret = this.http.get(url)
      .map((response: Response) => response.json().limsValidUse as ResponseEntity)
      .catch(this.handleError);
    return ret;

  }


  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
