import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ResponseEntity, MapEntity } from '../../../_entities/response-entity';

@Injectable()
export class MapService {
  private bj_api_url = 'assets/localData/beijing.json';
  private gs_api_url = 'assets/localData/gansu.json';
  private hlj_api_url = 'assets/localData/heilongjiang.json';
  private china_api_url = 'assets/localData/china.json';
  constructor(private http: Http) {

  };
  
  getMapChange() {
    let url = `${this.bj_api_url}`;
    let ret = this.http.get(url)
      .map((response: Response) => response.json() as ResponseEntity)
      .catch(this.handleError);
    return ret;
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
