import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { fadeIn } from "../../animations/fade-in";
import { Merchant } from "../model/merchant";
import { ShopType } from "../model/shop";
import { ShopService } from "../services/shop.service";
import { PublicFunction } from "../../shared/common/public-function";

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
  provinces: any[];
  cities: any[];
  areas: any[];
  address: any[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private shopService: ShopService,
    private fb: FormBuilder,
    private publicFunction: PublicFunction
  ) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.merchantId = param['id'];
    });

    if (this.merchantId) {
      this.getMerchantById(this.merchantId);
    } else {
      this.getAddressInfo();
    }

    this.getShopTypeList();

    this.buildForm();
  }

  // 创建表单
  buildForm() {
    this.merchantForm = this.fb.group({
      merchantName: [this.merchant.merchant_name, [Validators.required]],
      shopType: [this.merchant.shop_type, [Validators.required]],
      nickName: [this.merchant.nickname],
      discount: [this.merchant.discount],
      phone: [this.merchant.phone],
      address: [this.address],
      addressDetail: [this.merchant.address_detail],
      merchantDesc: [this.merchant.merchant_desc],
      point: [null]
    });
  }

  submitForm(value) {
    console.log(value);
  }

  // 根据门店 ID 获取门店信息
  getMerchantById(id: string) {
    this.shopService.getMerchantList().subscribe(res => {
      this.merchant = res.find(item => item.id == id);

      this.getAddressInfo();

      // 设置表单的值
      this.merchantForm.patchValue({
        merchantName: this.merchant.merchant_name,
        shopType: this.merchant.shop_type,
        nickName: this.merchant.nickname,
        discount: this.merchant.discount,
        phone: this.merchant.phone,
        addressDetail: this.merchant.address_detail,
        merchantDesc: this.merchant.merchant_desc,
        point: [this.merchant.coordinate_x, this.merchant.coordinate_y]
      });
    });
  }

  // 异步加载省市区信息
  loadData(e: { option: any, index: number, resolve: Function, reject: Function }): void {
    if (e.index === -1) {
      e.resolve(this.provinces);
      return;
    }

    const option = e.option;
    if (e.index === 0) {
      e.resolve(this.cities[option.value]);
    } else if (e.index === 1) {
      e.resolve(this.areas[option.value]);
    } else {
      e.reject();
      option.isLeaf = true;
    }
  }

  // 获取门店分组列表
  getShopTypeList() {
    this.shopService.getShopTypeList().subscribe(res => {
      this.shopTypeList = res;
    });
  }

  // 获取省市区信息
  getAddressInfo() {
    let p, c, a;
    // 获取省
    this.publicFunction.getProvinces().subscribe(res => {
      this.provinces = res;
      // 获取市
      this.publicFunction.getCities().subscribe(res => {
        this.cities = res;
        // 获取地区
        this.publicFunction.getAreas().subscribe(res => {
          this.areas = res;
          if (this.merchantId) {
            p = this.provinces.find(item => item.value == this.merchant.provinceCode);
            this.address.push(p);

            c = this.cities[this.merchant.provinceCode].find(item => item.value == this.merchant.cityCode);
            this.address.push(c);

            a = this.areas[this.merchant.cityCode].find(item => item.value == this.merchant.areaCode);
            this.address.push(a);
          }

          this.merchantForm.patchValue({
            address: this.address
          });
        });
      });
    });
  }

  // 获取地图定位
  getPosition(pos) {
    this.merchantForm.value.point = pos;
  }

  cancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
