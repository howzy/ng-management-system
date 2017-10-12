import { Directive, ElementRef, Input, OnInit, OnChanges, SimpleChange } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';

import * as echarts from 'echarts';

@Directive({
  selector: 'echart'
})
export class EchartOptionDirective implements OnInit, OnChanges {
  @Input() chartType: any;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    Observable.fromEvent(window, 'resize')
      .debounceTime(100)
      .subscribe(event => {
        echarts.init(this.el.nativeElement).resize();
      })
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    for (let propName in changes) {
      let changedProp = changes[propName];
      if (!changedProp.firstChange) {
        echarts.init(this.el.nativeElement).setOption(this.chartType);
      }
    }
  }

}
