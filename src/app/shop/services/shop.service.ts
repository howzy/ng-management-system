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

  /**
   * 根据 ID 获取门店分类
   * @param typeId 门店分类编号
   */
  getShopTypeById(typeId: number): Observable<ShopType> {
    let url = 'mock-data/shop-type.json';
    return this.http.get(url)
      .map(res => {
        return res.json().find(item => item.id === typeId);
      })
  }

  /**
   * 根据 id 删除门店分类
   * @param typeId 门店分类编号
   */
  delShopTypeById(typeId: number) {
    //
  }

}
