//登录用户实体类
export class UserEntity {
  //登录用户ID
  public id:string;
  //登录用户名
  public userName:string;
  //登录用户显示名
  public displayName:string;
  //登录用户授权token
  public token:string;
  //默认路由
  public defaultRoute:string;
  //权限组
  public groupId:string;
  //白名单
  public whiteList:any[];
  //黑名单
  public backList:any[];

}
