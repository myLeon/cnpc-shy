import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { ResponseEntity } from '../../_entities/response-entity';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import {UserService } from '../../_core/user.service';


@Injectable()
export class PersonnelService {

  // private api_url = 'http://localhost:3000';
  private api_url="assets/localData/home.json";
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http,private user:UserService) {

    console.log(this.user.getCurrentUser());

   }

 
  getJqTask(): Observable<ResponseEntity> {
    //let url = `${this.api_url}/home_JqTask`;
    let url=`${this.api_url}`;
    let ret = this.http.get(url)
      .map((response: Response) => response.json().home_JqTask as ResponseEntity)
      // .map((response: Response) => response.json() as ResponseEntity)
      .catch(this.handleError);
    return ret;
  }




  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
