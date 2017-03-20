import { Directive, ElementRef, Input, OnInit, HostBinding, OnChanges, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';

import { Subject, Subscription } from "rxjs";

import * as echarts from 'echarts';
import ECharts = echarts.ECharts;
import EChartOption = echarts.EChartOption;

@Directive({
  selector: '[echarts-map]'
})
export class EchartsMapDirective implements OnChanges, OnInit, OnDestroy {

  private chart: ECharts;
  private sizeCheckInterval = null;
  private reSize$ = new Subject<string>();
  private onResize: Subscription;

  @Input('echarts-map') options: EChartOption;

  @HostBinding('style.height.px') elHeight: number;

  constructor(private el: ElementRef, private http: Http) {

  }

  ngOnChanges(changes) {
    this.http.get('../../../assets/localData/beijing.json').subscribe(res => {
      echarts.registerMap('beijing', res.json());
      this.chart = echarts.init(this.el.nativeElement, 'vintage');
      this.chart.setOption(this.options);
    });
    this.http.get('../../../assets/localData/heilongjiang.json').subscribe(res => {
      echarts.registerMap('heilongjiang', res.json());
      this.chart = echarts.init(this.el.nativeElement, 'vintage');
      this.chart.setOption(this.options);
    });
    this.http.get('../../../assets/localData/gansu.json').subscribe(res => {
      echarts.registerMap('gansu', res.json());
      this.chart = echarts.init(this.el.nativeElement, 'vintage');
      this.chart.setOption(this.options);
    });
  }

  ngOnInit() {
    this.sizeCheckInterval = setInterval(() => {
      this.reSize$.next(`${this.el.nativeElement.offsetWidth}:${this.el.nativeElement.offsetHeight}`)
    }, 100);
    this.onResize = this.reSize$
      .distinctUntilChanged()
      .subscribe((_) => this.chart.resize());
    this.elHeight = this.el.nativeElement.offsetHeight;
    if (this.elHeight < 300) {
      this.elHeight = 300;
    }
  }

  ngDoCheck(){
    
  }


  ngOnDestroy() {
    if (this.sizeCheckInterval) {
      clearInterval(this.sizeCheckInterval);
    }
    this.reSize$.complete();
    if (this.onResize) {
      this.onResize.unsubscribe();
    
  }
  }

}
