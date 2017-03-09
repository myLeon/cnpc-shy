import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserEntity } from '../_entities/user-entity';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getCurrentUser(): UserEntity {
    if (localStorage.getItem('currentUser')) {
      let user = JSON.parse(localStorage.getItem('currentUser'));
      return user as UserEntity;
    }
    else
    {
      return null;
    }
  }

  //取得逗号分隔的权限组字符串，用于SQL IN 查询
  getCurrentUserRoleGroupsStr():string {
    let user = this.getCurrentUser();
    //let wl=user.whiteList;

    return "SHY,DQ_YQS";

  }
}
