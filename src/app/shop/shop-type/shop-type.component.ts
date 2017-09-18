import { Component, OnInit } from '@angular/core';

import { fadeIn } from '../../animations/fade-in';
import { ShopService } from '../services/shop.service';
import { ShopType } from '../model/shop';

@Component({
  selector: 'app-shop-type',
  templateUrl: './shop-type.component.html',
  styleUrls: ['./shop-type.component.css'],
  animations: [fadeIn]
})
export class ShopTypeComponent implements OnInit {
  shopTypeList: ShopType[];
  allChecked: boolean = false;
  indeterminate: boolean = false;

  constructor(
    private shopService: ShopService
  ) { }

  ngOnInit() {
    this.getShopTypeList();
  }

  getShopTypeList() {
    this.shopService.getShopTypeList().subscribe(res => {
      this.shopTypeList = res;
    });
  }

  updateAllChecked() {
    this.indeterminate = false;
    if(this.allChecked) {
      this.shopTypeList.forEach(item => item.checked = true);
    } else {
      this.shopTypeList.forEach(item => item.checked = false);
    }
  }

  updateSingleChecked() {
    if (this.shopTypeList.every(item => !!item.checked === false)){
      this.indeterminate = false;
      this.allChecked = false;
    } else if (this.shopTypeList.every(item => item.checked === true)) {
      this.indeterminate = false;
      this.allChecked = true;
    } else {
      this.indeterminate = true;
      this.allChecked = false;
    }
  }

}
