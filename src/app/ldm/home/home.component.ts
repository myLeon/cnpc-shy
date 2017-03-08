import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  personnel: any = {
    rows: [
      { "id": "1", "name": "lilin" }
    ],
    columns: [
      { "field": "id","title":"ID"},
      { "field": "name","title":"名称"}
    ]
  };
  constructor() {
    //console.log('home');

  }

  ngOnInit() {

  }

}
