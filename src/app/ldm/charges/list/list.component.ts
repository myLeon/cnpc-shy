import { Component, OnInit, Inject } from '@angular/core';
import { products } from '../products';
import { GroupDescriptor, process } from '@progress/kendo-data-query';
import { ResponseEntity } from '../../../_entities/response-entity';
// import { PersonnelService } from './personnel.service'
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  //时间日期
  date = new Date();
  search: string = null;
  myText = 'A String from the Component';
  private groups: GroupDescriptor[] = [{ field: "Category.CategoryName" }];

  private gridView: any[] = [];
 //end 时间日期
  public ngOnInit(): void {
    this.loadProducts();
    console.log(products.length)
  }

  private loadProducts(): void {
    this.gridView = products;

  }

}
