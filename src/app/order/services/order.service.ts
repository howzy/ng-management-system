import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";

import { OrderProfile } from "../model/order";

@Injectable()
export class OrderService {

  constructor(private http: Http) { }

  /**
   * 获取30天订单概况
   */
  getOrderProfile(): Observable<OrderProfile[]> {
    let url = 'mock-data/order-profile.json';
    return this.http.get(url)
      .map(res => res.json())
      .catch(error => Observable.throw(error || 'Server error'));
  }
  
}
