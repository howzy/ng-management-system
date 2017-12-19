import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { NzModalService, NzMessageService } from 'ng-zorro-antd';

import { fadeIn } from "../../animations/fade-in";
import { ShopService } from "../services/shop.service";
import { Merchant } from "../model/merchant";
import { FieldBase, Textbox } from "../../shared/components/dynamic-form/form-field";

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
  pageSize: number = 7;
  loading: boolean = true;
  isVisible = false;
  selectedImg: string;

  showModal = (imgUrl) => {
    this.selectedImg = imgUrl;
    this.isVisible = true;
  }

  handleOk = (e) => {
    this.isVisible = false;
  }

  handleCancel = (e) => {
    this.isVisible = false;
  }

  // 搜索栏条目
  serachList: FieldBase<any>[] = [
    new Textbox({
      key: 'merchantName',
      label: '门店名称',
      placeholder: '请输入门店名称'
    }),
    new Textbox({
      key: 'phone',
      label: '联系电话',
      placeholder: '请输入联系电话'
    }),
    new Textbox({
      key: 'recommendMemberNo',
      label: '推荐人账号',
      placeholder: '请输入推荐人账号'
    }),
    new Textbox({
      key: 'recommendPhone',
      label: '推荐人手机号',
      placeholder: '请输入推荐人手机号'
    })
  ];

  constructor(
    private shopService: ShopService,
    private confirmServ: NzModalService,
    private messageServ: NzMessageService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getMerchantList();
  }

  // 搜索
  getSearchList(value) {
    console.log(value);
  }

  getMerchantList() {
    this.loading = true;
    this.shopService.getMerchantList().subscribe(res => {
      this.loading = false;
      this.merchantList = res;
    });
  }

  delShopTypeById(typeId) {
    this.confirmServ.confirm({
      title: '是否要删除该分类？',
      onOk: () => {
        this.messageServ.success('删除成功！');
      }
    });
  }

  batchDel() {
    if (this.indeterminate || this.allChecked) {
      this.confirmServ.confirm({
        title: '是否批量删除分类？',
        onOk: () => {
          this.messageServ.success('删除成功！');
        }
      });
    } else {
      this.messageServ.create('warning', '请至少选择一行！');
    }
  }

  gotoEdit(merchantId?: string) {
    this.router.navigate(['./edit', merchantId ? { id: merchantId } : {}], { relativeTo: this.route });
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
