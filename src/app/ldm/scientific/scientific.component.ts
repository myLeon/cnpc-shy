import { Component, OnInit, Inject } from '@angular/core';
import { products } from './products';
import { GroupDescriptor, process } from '@progress/kendo-data-query';
import { ResponseEntity } from '../../_entities/response-entity';
import { ScientificService } from './scientific.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-scientific',
  templateUrl: './scientific.component.html',
  styleUrls: ['./scientific.component.scss']
})
export class ScientifiComponent implements OnInit {


  //加氢任务区域配置
  jqTask: any = { 
    rows: [],
    columns: [
      { title: '任务ID', name: 'identity', className: ['w80'] },
      { title: '任务名称', name: 'name', className: [''] },
      { title: '任务类型', name: 'tasktype', className: ['text-success', ''] },
      { title: '进度', name: 'process', className: ['text-warning', 'w80'] }
    ],
    config: {
      paging: true,
      filtering: { filterString: '' },
      className: ['table-striped', 'table-bordered']
    },
    status: "before",
    message: ""
  };
  //时间日期
  date = new Date();
  search: string = null;
  myText = 'A String from the Component';
  private groups: GroupDescriptor[] = [{ field: "Category.CategoryName" }];

  private gridView: any[] = [];
 //end 时间日期


  // constructor(
  //   @Inject('PersonnelService') private service: PersonnelService,
  //   private route: ActivatedRoute,
  //   private router: Router


  // ) 
  // {

  //   this.service.getJqTask().subscribe(res => this.setJQTASK(res));
  // }




  public ngOnInit(): void {
    this.loadProducts();
  }

  private loadProducts(): void {
    this.gridView = products;

  }

  //设置加氢任务数据
  // setJQTASK(res: ResponseEntity) {
  //   if (!res.success) {
  //     this.jqTask = { status: "message", message: res.message };
  //     return;
  //   }
  //   if (res.data.length > 0) {
  //     this.jqTask = Object.assign(this.jqTask, { status: "success", rows: res.data });
  //     //console.log(this.jqTask)
  //   }
  //   else {
  //     this.jqTask = { status: "message", message: "无数据展示" };
  //   }
  // }

}

