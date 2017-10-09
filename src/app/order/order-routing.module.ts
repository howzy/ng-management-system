import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard } from "../login/services/auth-guard.service";
import { OrderProfileComponent } from "./order-profile/order-profile.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        canActivate: [AuthGuard],
        children: [
          {
            path: 'profile',
            component: OrderProfileComponent
          }
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class OrderRoutingModule { 
  
}