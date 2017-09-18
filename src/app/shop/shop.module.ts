import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { ShopInfoComponent } from './shop-info/shop-info.component';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopTypeComponent } from './shop-type/shop-type.component';

@NgModule({
  imports: [
    CommonModule,
    ShopRoutingModule,
    NgZorroAntdModule
  ],
  declarations: [
    ShopInfoComponent,
    ShopTypeComponent
  ]
})
export class ShopModule { }
