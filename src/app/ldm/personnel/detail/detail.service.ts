import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { ResponseEntity } from '../../../_entities/response-entity';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import { UserService } from '../../../_core/user.service';


@Injectable()
export class DetailService {

  // private api_url = 'http://localhost:3000';
  private api_url = "assets/localData/personnel.json";
  private headers = new Headers({ 'Content-Type': 'application/json' });
  // data: any = null;
  constructor(private http: Http, private user: UserService) {
  }


  //人员详情
  getStaffModel():Observable<ResponseEntity>{
     let url = `${this.api_url}`;
    let ret = this.http.get(url)
      .map((response: Response) => response.json().staffModel as ResponseEntity)
      .catch(this.handleError);
    return ret;
  }

   //一段时间内分析的样品、项目量
  getAnalysisAmount():Observable<ResponseEntity>{
     let url = `${this.api_url}`;
    let ret = this.http.get(url)
      .map((response: Response) => response.json().analysisAmount as ResponseEntity)
      .catch(this.handleError);
    return ret;
  }

   //课题授权
  getSubjectRole():Observable<ResponseEntity>{
    let url = `${this.api_url}`;
    let ret = this.http.get(url)
      .map((response: Response) => response.json().subjectRole as ResponseEntity)
      .catch(this.handleError);
    return ret;
  }
   //所申请评价任务 
   getApplyTask():Observable<ResponseEntity>{
    let url = `${this.api_url}`;
    let ret = this.http.get(url)
      .map((response: Response) => response.json().applyTask as ResponseEntity)
      .catch(this.handleError);
    return ret;
  }
  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
