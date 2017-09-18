import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { ShopInfoComponent } from './shop-info/shop-info.component';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopTypeComponent } from './shop-type/shop-type.component';
import { ShopService } from './services/shop.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ShopRoutingModule,
    NgZorroAntdModule
  ],
  declarations: [
    ShopInfoComponent,
    ShopTypeComponent
  ],
  providers: [ShopService]
})
export class ShopModule { }
