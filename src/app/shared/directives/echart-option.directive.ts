import { Directive, ElementRef, Input, OnInit, OnChanges, SimpleChange } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';

import * as echarts from 'echarts';
import Echarts = echarts.Echarts;
import EchartOption = echarts.EchartOption;

@Directive({
  selector: 'echart'
})
export class EchartOptionDirective implements OnInit, OnChanges {
  private chart: Echarts;

  @Input() chartType: EchartOption;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.chart = echarts.init(this.el.nativeElement);

    Observable.fromEvent(window, 'resize')
      .debounceTime(100)
      .subscribe(event => {
        this.chart.resize();
      });
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    if (this.chartType && this.chart) {
      this.chart.setOption(this.chartType);
    }
  }

}
