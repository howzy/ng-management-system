import { Component, OnInit } from '@angular/core';

import { fadeIn } from "../../animations/fade-in";
import { OrderService } from "../services/order.service";
import { PublicFunction } from "../../shared/common/public-function";

@Component({
  selector: 'app-order-profile',
  templateUrl: './order-profile.component.html',
  styleUrls: ['./order-profile.component.css'],
  animations: [fadeIn]
})
export class OrderProfileComponent implements OnInit {
  option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['下单数','售后订单数']
    },
    color: ['#fc9982', '#3c8dbc', '#00c0ef', '#d9ebb1', '#90d0c2', '#fee298', '#a9cce0', '#f2aeb9', '#bda2ee', "#bebc96"],
    grid: {
      left: '3%',
      right: '4%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [],
      axisLabel: {
        interval: 0,
        rotate: 60
      }
    },
    yAxis: {
      type: 'value',
      splitNumber: 1,
      axisLabel: {
        formatter: '{value} 单'
      }
    },
    series: [
      {
        name: '下单数',
        type: 'line',
        data: [],
        markPoint: {
          data: [
            {
              type: 'max',
              name: '最大值'
            },
            {
              type: 'min',
              name: '最小值'
            }
          ]
        }
      },
      {
        name: '售后订单数',
        type: 'line',
        data: [],
        markPoint: {
          data: [
            {
              type: 'max',
              name: '最大值'
            },
            {
              type: 'min',
              name: '最小值'
            }
          ]
        }
      }
    ]
  };

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
    // 获取前30天的日期数组
    this.option.xAxis.data = PublicFunction.getDateArray(30);
    
    this.orderService.getOrderProfile().subscribe(res => {
      let orderNum = [];
      let refundNum = [];
      let orderProfile = res;
      orderProfile.forEach(item => {
        orderNum.push(item.orderNum);
        refundNum.push(item.refundNum);
      });

      this.option.series[0].data = orderNum;
      this.option.series[1].data = refundNum;
      this.option = Object.assign({}, this.option);
    });
  }

}
