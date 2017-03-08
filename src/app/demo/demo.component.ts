import { Component, OnInit } from '@angular/core';
import { products } from './products';
import { GroupDescriptor, process } from '@progress/kendo-data-query';


import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'dataPipe' })
export class DataTablePipe implements PipeTransform {
    transform(array: any[], query: string): any {
    if (query) {
      return array.filter((value: any, index: number, arr: any) => value.ProductName.indexOf(query) > -1);
    }
    return array;
  }
}



@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  date = new Date();
  search: string = null;
  myText = 'A String from the Component';
  private groups: GroupDescriptor[] = [{ field: "Category.CategoryName" }];

  private gridView: any[] = [];

  constructor() { }

  public ngOnInit(): void {
    this.loadProducts();
  }

  private loadProducts(): void {
    this.gridView = products;

  }

}
