import { Component, OnInit,Input } from '@angular/core';
import { ColumnEntity  } from './simple-table.entity'

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss']
})
export class SimpleTableComponent implements OnInit {
  @Input("rows") rows: any;
  @Input("columns") columns: any;
  constructor() {

  }

  ngOnInit() {
    //  console.log(this.rows);
    //  console.log(this.columns);
  }

  getColumnDisplayName(col:ColumnEntity){
    return col.title ?  col.title:col.field;
  }

}
