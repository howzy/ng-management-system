import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Directive({
  selector: 'echart'
})
export class EchartOptionDirective implements OnInit {
  @Input() chartType: any;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    echarts.init(this.el.nativeElement).setOption(this.chartType);
  }

}
