//ajax 请求服务端响应实体类
export class ResponseEntity{
  // 请求成功与否
  public success:boolean;
  // 如果成功，返回的数据
  public data?:any[];
  // 对于分页时，记录总数
  public total?:number;
  // 对于分页时，当前页码
  public page?:number;
  // 用于提示用户的信息
  public message?:string;
  // 用于提示开发者的信息，报错信息等
  public error?:string;
}

export class MapEntity{
  public type:string;

  public features:any[];

  public UTF8Encoding:boolean;
}
