import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { fadeIn } from "../../animations/fade-in";
import { Merchant } from "../model/merchant";
import { ShopType } from "../model/shop";
import { ShopService } from "../services/shop.service";

@Component({
  selector: 'app-merchant-edit',
  templateUrl: './merchant-edit.component.html',
  styleUrls: ['./merchant-edit.component.css'],
  animations: [fadeIn]
})
export class MerchantEditComponent implements OnInit {
  merchant: Merchant = <Merchant>{};
  merchantId: string;
  merchantForm: FormGroup;
  shopTypeList: ShopType[] = [];
  selectedShopType: ShopType = <ShopType>{};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private shopService: ShopService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.merchantId = param['id'];
    });

    if (this.merchantId) {
      this.getMerchantById(this.merchantId);
    }

    this.getShopTypeList();

    this.buildForm();
  }

  buildForm() {
    this.merchantForm = this.fb.group({
      merchantName: [this.merchant.merchant_name, [Validators.required]],
      shopType: [this.merchant.shop_type, [Validators.required]],
      nickName: [this.merchant.nickname],
      discount: [this.merchant.discount],
      phone: [this.merchant.phone],
      addressDetail: [this.merchant.address_detail],
      merchantDesc: [this.merchant.merchant_desc]
    });
  }

  getMerchantById(id: string) {
    this.shopService.getMerchantList().subscribe(res => {
      this.merchant = res.find(item => item.id == id);

      // 设置表单的值
      this.merchantForm.patchValue({
        merchantName: this.merchant.merchant_name,
        shopType: this.merchant.shop_type,
        nickName: this.merchant.nickname,
        discount: this.merchant.discount,
        phone: this.merchant.phone,
        addressDetail: this.merchant.address_detail,
        merchantDesc: this.merchant.merchant_desc
      });
    });
  }

  getShopTypeList() {
    this.shopService.getShopTypeList().subscribe(res => {
      this.shopTypeList = res;
    });
  }

}
