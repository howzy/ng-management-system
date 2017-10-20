import { Component, OnInit } from '@angular/core';

import { fadeIn } from "../../animations/fade-in";
import { ShopService } from "../services/shop.service";
import { Merchant } from "../model/merchant";

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.css'],
  animations: [fadeIn]
})
export class MerchantComponent implements OnInit {
  merchantList: Merchant[];
  allChecked: boolean = false;
  indeterminate: boolean = false;
  pageIndex: number = 1;
  pageSize: number = 10;
  loading: boolean = true;

  constructor(
    private shopService: ShopService
  ) { }

  ngOnInit() {
    this.getMerchantList();
  }

  getMerchantList() {
    this.loading = true;
    this.shopService.getMerchantList().subscribe(res => {
      this.loading = false;
      this.merchantList = res;
      console.log(res);
    });
  }

  updateAllChecked() {
    this.indeterminate = false;
    if (this.allChecked) {
      this.merchantList.forEach(item => item.checked = true);
    } else {
      this.merchantList.forEach(item => item.checked = false);
    }
  }

  updateSingleChecked() {
    if (this.merchantList.every(item => !!item.checked === false)) {
      this.indeterminate = false;
      this.allChecked = false;
    } else if (this.merchantList.every(item => item.checked === true)) {
      this.indeterminate = false;
      this.allChecked = true;
    } else {
      this.indeterminate = true;
      this.allChecked = false;
    }
  }

}
