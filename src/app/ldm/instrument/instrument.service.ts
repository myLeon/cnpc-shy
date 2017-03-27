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
export class InstrumentService {

  // private api_url = 'http://localhost:3000';
  private api_url = "assets/localData/instrument.json";
  private headers = new Headers({ 'Content-Type': 'application/json' });
  // data: any = null;
  constructor(private http: Http, private user: UserService) {
    console.log(this.user.getCurrentUser());
    

  }
  getinstrumentUseRatio(): Observable<any> {
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
          data: ['气相色谱', '光谱', '硫分析', '密度分析', '油品分析']
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisLabel: {
            formatter: '{value}%'
          }

        }
      ],
      series: [
        {
          name: '一段时间内的仪器利用率',
          type: 'bar',
          data: [67, 88, 78, 98, 100],
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
  //仪器设备列表
  getJqTask(): Observable<ResponseEntity> {
    //let url = `${this.api_url}/home_JqTask`;
    let url = `${this.api_url}`;
    let ret = this.http.get(url)
      .map((response: Response) => response.json().instrumentList as ResponseEntity)
      // .map((response: Response) => response.json() as ResponseEntity)
      .catch(this.handleError);
    return ret;
  }
   //仪器设备分类统计
  getClassificationInfo(): Observable<ResponseEntity> {
    //let url=`${this.api_url}/Subject`;
    let url = `${this.api_url}`;
    let ret = this.http.get(url)
      .map((response: Response) => response.json().instrumentTypeCount as ResponseEntity)
      .catch(this.handleError);
    return ret;
  }
  //各单位仪器设备统计
  getInstrumentStatisticsInfo(): Observable<ResponseEntity> {
    //let url=`${this.api_url}/device`;
    let url = `${this.api_url}`;
    let ret = this.http.get(url)
      .map((response: Response) => response.json().instrumentGroupAmount as ResponseEntity)
      .catch(this.handleError);
    return ret;
    // console.log(ret)
  }
  //一段时间内的仪器利用率
  getInstrumentUtilizationInfo(): Observable<ResponseEntity> {
    //let url=`${this.api_url}/deviceBase`;
    let url = `${this.api_url}`;
    let ret = this.http.get(url)
      .map((response: Response) => response.json().instrumentUseRatio as ResponseEntity)
      .catch(this.handleError);
    return ret;

  }


  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
