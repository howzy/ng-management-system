import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopInfoComponent } from './shop-info/shop-info.component';
import { ShopRoutingModule } from './shop-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ShopRoutingModule
  ],
  declarations: [
    ShopInfoComponent
  ]
})
export class ShopModule { }
