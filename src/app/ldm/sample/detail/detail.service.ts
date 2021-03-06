import { Http, Headers, Response } from '@angular/http';
import { ResponseEntity } from '../../../_entities/response-entity';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import { UserService } from '../../../_core/user.service';
import { Injectable } from '@angular/core';

@Injectable()
export class DetailService {

  private api_url = "assets/localData/sample.json";
  private headers = new Headers({ 'Content-Type': 'application/json' });
  constructor(private http: Http, private user: UserService) {
  }

  //仪器设备实体
  getInstrumentModelInfo(): Observable<ResponseEntity> {
    let url = `${this.api_url}`;
    let ret = this.http.get(url)
      .map((response: Response) => response.json().sampleModel as ResponseEntity)
      .catch(this.handleError);
    return ret;
  }


  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
