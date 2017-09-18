import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ShopType } from '../model/shop';

@Injectable()
export class ShopService {

  constructor(
    private http: Http
  ) { }

  /**
   * 获取门店分类列表
   */
  getShopTypeList(): Observable<ShopType[]> {
    let url = 'mock-data/shop-type.json';
    return this.http.get(url)
      .map(res => res.json())
      .catch(error => Observable.throw(error || 'Server error'));
  }

}
