import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { ShopInfoComponent } from './shop-info/shop-info.component';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopTypeComponent } from './shop-type/shop-type.component';
import { ShopService } from './services/shop.service';
import { ShopTypeEditComponent } from './shop-type-edit/shop-type-edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ShopRoutingModule,
    NgZorroAntdModule
  ],
  declarations: [
    ShopInfoComponent,
    ShopTypeComponent,
    ShopTypeEditComponent
  ],
  providers: [ShopService]
})
export class ShopModule { }
