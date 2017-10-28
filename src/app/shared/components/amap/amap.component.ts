import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'amap',
  templateUrl: './amap.component.html',
  styleUrls: ['./amap.component.css']
})
export class AmapComponent implements OnInit {
  @Input() position: string[];
  @Output() onSelect = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    let map, marker, geolocation;
    // 初始化地图
    map = new AMap.Map('gaodemap-container', {
      resizeEnable: true,
      zoom: 13,
      center: [116.397428, 39.90923]
    });
    // 初始化点标记
    marker = new AMap.Marker({
      position: map.getCenter(),
      draggable: true,
      cursor: 'move',
      raiseOnDrag: true
    });
    marker.setMap(map);
    // 地图点击事件
    map.on('click', e => {
      marker.setPosition(e.lnglat);
      map.setCenter(e.lnglat);
      this.onSelect.emit([e.lnglat.getLng(), e.lnglat.getLat()]);
    });
    // 地图插件
    map.plugin(['AMap.ToolBar', 'AMap.Scale', 'AMap.Geolocation'], function () {
      // 工具条插件
      map.addControl(new AMap.ToolBar());
      // 比例尺插件
      map.addControl(new AMap.Scale());
      // 定位插件
      geolocation = new AMap.Geolocation({
        enableHighAccuracy: true,//是否使用高精度定位，默认:true
        timeout: 10000,          //超过10秒后停止定位，默认：无穷大
        buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        zoomToAccuracy: true,    //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        buttonPosition: 'RB'     //定位按钮停靠位置，默认：'LB'，左下角
      });
      map.addControl(geolocation);
      AMap.event.addListener(geolocation, 'complete', data => { console.log('获取定位成功。') });//返回定位信息
      AMap.event.addListener(geolocation, 'error', err => { console.log('获取定位失败。') });//返回定位出错信息
    });

    if (!this.position) {// 没有初始定位中心时，自动获取当前定位
      geolocation.getCurrentPosition();
    } else {// 有初始定位中心则设置地图中心点以及点标记
      map.setCenter(this.position);
      marker.setPosition(this.position);
    }
  }

}
