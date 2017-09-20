import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { fadeIn } from '../../animations/fade-in';
import { ShopService } from '../services/shop.service';
import { ShopType } from "../model/shop";

@Component({
  selector: 'app-shop-type-edit',
  templateUrl: './shop-type-edit.component.html',
  styleUrls: ['./shop-type-edit.component.css'],
  animations: [fadeIn]
})
export class ShopTypeEditComponent implements OnInit {
  shopTypeForm: FormGroup;
  shopType: ShopType = <ShopType>{};
  typeId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private shopService: ShopService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.typeId = param['id'];
    });

    // 存在 typeId 则为编辑页面，否则为新增页面
    if (this.typeId) {
      this.getShopTypeById();
    }

    this.buildForm();
  }

  buildForm() {
    this.shopTypeForm = this.fb.group({
      icon: [this.shopType.icon],
      typeName: [this.shopType.type_name, [Validators.required]],
      typeDesc: [this.shopType.type_desc],
      ord: [this.shopType.ord]
    })
  }

  getShopTypeById() {
    this.shopService.getShopTypeById(this.typeId).subscribe(res => {
      this.shopType = res;

      // 设置表单的值
      this.shopTypeForm.setValue({
        icon: this.shopType.icon,
        typeName: this.shopType.type_name,
        typeDesc: this.shopType.type_desc,
        ord: this.shopType.ord
      })
    });
  }

  submitForm() {
    console.log(this.shopTypeForm.value);
  }
  
  cancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  chooseImg() {
    document.getElementById("uploadInput").click();
  }

  changeImg(e) {
    var file = e.target.files;
    var myReader = new FileReader();
    myReader.onload = (ev) => {
      document.getElementById("uploadImg")["src"] = ev.target["result"];
    }
    myReader.readAsDataURL(file[0]);
  }

}
