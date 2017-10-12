import { NgModule } from '@angular/core';
import { SharedModule } from "../shared/shared.module";

import { NgZorroAntdModule } from "ng-zorro-antd";

import { OrderRoutingModule } from "./order-routing.module";
import { OrderProfileComponent } from './order-profile/order-profile.component';
import { OrderService } from "./services/order.service";

@NgModule({
  imports: [
    SharedModule,
    OrderRoutingModule,
    NgZorroAntdModule
  ],
  declarations: [OrderProfileComponent],
  providers: [OrderService]
})
export class OrderModule { }
