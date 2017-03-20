import { Component, OnInit, Inject } from '@angular/core';
import { MapService } from './map.service';
import { Ng2Echarts } from 'ng2-echarts';
import { Http, Headers, Response } from '@angular/http';
import { ActivatedRoute, Router } from "@angular/router";
import { ResponseEntity } from '../../../_entities/response-entity';


@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
    chinaMap: any = {};

    BJoption: any = {
        series: [
            {
                name: '北京',
                type: 'map',
                mapType: 'beijing',
                roam: false,
                data: [
                    {
                        name: "昌平区",
                        selected: true,
                        itemStyle: {
                            normal: {
                                areaColor: "#cd2626"
                            },
                            emphasis: {
                                areaColor: "#cd2626"
                            }
                        }
                    }
                ],
                silent: true
            }
        ]
    };
    HLJoption: any = {
        series: [
            {
                name: '黑龙江',
                type: 'map',
                mapType: 'heilongjiang',
                roam: false,
                data: [
                    {
                        name: "大庆市",
                        selected: true,
                        itemStyle: {
                            normal: {
                                areaColor: "#cd2626"
                            },
                            emphasis: {
                                areaColor: "#cd2626"
                            }
                        }
                    }
                ],
                silent: true
            }
        ]
    };
    GSoption: any = {
        series: [
            {
                name: '甘肃',
                type: 'map',
                mapType: 'gansu',
                roam: false,
                data: [
                    {
                        name: "兰州市",
                        selected: true,
                        itemStyle: {
                            normal: {
                                areaColor: "#cd2626"
                            },
                            emphasis: {
                                areaColor: "#cd2626"
                            }
                        }
                    }
                ],
                silent: true
            }
        ]
    };
    constructor(
        @Inject('MapService') private service: MapService,
        private route: ActivatedRoute,
        private router: Router
    ) {

    }

    ngOnInit() {

    }

    BJClick(param:any){
        console.log(param);
    }



}