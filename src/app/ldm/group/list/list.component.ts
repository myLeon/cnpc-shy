import { Component, OnInit } from '@angular/core';
// import { MapService } from '../map.service';
import { EChartModule } from 'ng2-echarts-d3';
declare var $: any;
@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent {
    option: any = {};
    groud: any = {};
    constructor() {
        //浏览器resize重画
        function getData() {
            var w = $('#chart-panel').width();
            var h = $('#chart-panel').height();
        }
        this.option = {
            backgroundColor: '#fff',
            title: [{
                text: "流程图",
                x: '5%',
                y: 0,
                textStyle: {
                    color: '#333',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontFamily: 'sans-serif',
                    fontSize: 14,
                }
            }],
            tooltip: {
                /*返回需要的信息*/
                formatter: function (param) {
                    var value = param.value;
                    return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 16px;padding-bottom: 7px;margin-bottom: 7px;"> ' + value[7] + '(' + value[6] + ')' +
                        '</div>';
                }
            },
            grid: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            },
            xAxis: {
                type: 'value',
                splitLine: {
                    show: false,
                },
                axisLabel: {
                    show: false
                },
                max: 1,
                min: 0
            },
            yAxis: {
                type: 'value',
                splitLine: {
                    show: false,
                },
                axisLabel: {
                    show: false
                },
                max: 1,
                min: 0
            },
            series: [{
                type: 'scatter',
                symbol: 'rect',
                zlevel: 2,
                symbolSize: function (value, params) {
                    var w = $('#chart-panel').width() / 8;
                    var h = $('#chart-panel').height() / 4;
                    if (value == 1) {
                        return [w, h / 4];
                    } else {
                        return [w, h];
                    }
                },
                data: [
                    ['0.1',
                        '0.9',
                        1,
                        '节点',
                        '10',
                        '10',
                        '10'
                    ],
                    ['0.1',
                        '0.8',
                        2,
                        '节点',
                        '10',
                        '10',
                        '10'
                    ],
                    ['0.3',
                        '0.8',
                        2,
                        '节点',
                        '10',
                        '10',
                        '10'
                    ],
                    ['0.5',
                        '0.8',
                        2,
                        '节点',
                        '10',
                        '10',
                        '10'
                    ],
                    ['0.7',
                        '0.8',
                        2,
                        '节点',
                        '10',
                        '10',
                        '10'
                    ],
                    ['0.1',
                        '0.5',
                        2,
                        '节点',
                        '10',
                        '10',
                        '10'
                    ],
                    ['0.3',
                        '0.5',
                        2,
                        '节点',
                        '10',
                        '10',
                        '10'
                    ]
                ],
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter: function (params) {
                            return params.value[3] + '\n\n核心接口数量：' + params.value[4] + '\n监测指标数量：' + params.value[5] + '\n告警数量' + params.value[6];
                        },
                        textStyle: {
                            color: 'black'
                        }
                    }
                }
            }, {
                name: '',
                type: 'lines',
                coordinateSystem: 'cartesian2d',
                zlevel: 0,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0.7,
                    color: '#fff',
                    symbolSize: 3
                },
                lineStyle: {
                    normal: {
                        color: '#ffa022',
                        width: 1,
                        curveness: 0
                    }
                },
                data: [{
                    coords: [
                        [0.1, 0.8], // 起点
                        [0.3, 0.8] // 终点
                    ]
                }]
            }, {
                name: '',
                type: 'lines',
                coordinateSystem: 'cartesian2d',
                zlevel: 4,
                polyline: true,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0.7,
                    color: '#fff',
                    symbolSize: 3
                },
                lineStyle: {
                    normal: {
                        color: '#ffa022',
                        width: 1,
                        curveness: 0
                    }
                },
                data: [{
                    coords: [
                        [0.2, 0.8], // 起点
                        [0.2, 0.8], // 终点
                        [0.2, 0.5],
                        [0.25, 0.5]
                    ]
                }]
            }]
        };



    }

    ngOnInit() {



    }

}
