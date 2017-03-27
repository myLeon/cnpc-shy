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
export class DeviceService {

  // private api_url = 'http://localhost:3000';
  private api_url = "assets/localData/device.json";
  private headers = new Headers({ 'Content-Type': 'application/json' });
  // data: any = null;
  constructor(private http: Http, private user: UserService) {

    console.log(this.user.getCurrentUser());
    

  }
  getDeviceBaseRunInfo(): Observable<any> {
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
          dataView: { show: false, readOnly: false },
          magicType: { show: true, type: ['line', 'bar'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      calculable: true,
      xAxis: [
        {
          type: '',
          data: ['大庆炼油所107组', '兰州中心催化所评价装置组', '兰州中心催化所乙苯脱氢组', '兰州炼制所和FCC中试所-固定流化床岗位', '兰州炼化所反应工程组', '兰州中心催化所丙烯酸组', '兰州聚烯烃所中试运行组', '兰州炼制所和FCC中试所-提升管和DCR岗位', '兰州炼制所和FCC中试所-ACE岗位', '兰州炼化所化工工艺组', '兰州环化所废水处理组', '兰州聚烯烃所硅胶组', '兰州聚丙烯中试所工艺组', '兰州中心催化所GARDES组', '兰州聚烯烃所聚丙烯催化剂组', '兰州炼化所乙烯评价组', '大庆树脂所806组']
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
          name: '装置数量统计',
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

  getJqTask(): Observable<ResponseEntity> {
    //let url = `${this.api_url}/home_JqTask`;
    let url = `${this.api_url}`;
    let ret = this.http.get(url)
      .map((response: Response) => response.json().deviceHYDList as ResponseEntity)
      // .map((response: Response) => response.json() as ResponseEntity)
      .catch(this.handleError);
    return ret;
  }
  getSubjectProgressInfo(): Observable<ResponseEntity> {
    //let url=`${this.api_url}/Subject`;
    let url = `${this.api_url}`;
    let ret = this.http.get(url)
      .map((response: Response) => response.json().deviceTypeCount as ResponseEntity)
      .catch(this.handleError);
    return ret;
  }

  getDeviceRunInfo(): Observable<ResponseEntity> {
    //let url=`${this.api_url}/device`;
    let url = `${this.api_url}`;
    let ret = this.http.get(url)
      .map((response: Response) => response.json().devicestatusCount as ResponseEntity)
      .catch(this.handleError);
    return ret;
    // console.log(ret)
  }

  // getDeviceBaseRunInfo(): Observable<ResponseEntity> {
  //   //let url=`${this.api_url}/deviceBase`;
  //   let url = `${this.api_url}`;
  //   let ret = this.http.get(url)
  //     .map((response: Response) => response.json().deviceDepartmentAmount as ResponseEntity)
  //     .catch(this.handleError);
  //   return ret;

  // }


  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
