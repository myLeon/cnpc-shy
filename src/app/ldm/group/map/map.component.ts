import { Component, OnInit } from '@angular/core';
import { MapService } from '../map.service';
import { Ng2Echarts } from 'ng2-echarts';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  chinaMap:any={};
  constructor() { 
    let randomData = function () {
      return Math.round(Math.random() * 1000);
    };
    this.chinaMap = {
    title: {
        text: '石化院实验室',
        subtext: '组织机构',
        left: 'center'
    },
    // tooltip: {
    //     trigger: 'item'
    // },
    legend: {
        orient: 'vertical',
        left: 'left',
        data:['院部','北京','大庆','兰州']
    },
    visualMap: {
        min: 0,
        max: 2500,
        left: 'left',
        top: 'bottom',
        // text: ['高','低'],           // 文本，默认为数值文本
        calculable: true
    },
    // toolbox: {
    //     show: true,
    //     orient: 'vertical',
    //     left: 'right',
    //     top: 'center',
    //     feature: {
    //         dataView: {readOnly: false},
    //         restore: {},
    //         saveAsImage: {}
    //     }
    // },
    series: [
        {
            name: 'iphone3',
            type: 'map',
            mapType: 'china',
            roam: false,
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            data:[
               {name: '北京',value: randomData() },
                {name: '甘肃',value: randomData() },
                {name: '黑龙江',value: randomData() },
              
            ]
        }
    ]
};
}

  ngOnInit() {
  }

}
