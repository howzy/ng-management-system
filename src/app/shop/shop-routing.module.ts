import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ShopInfoComponent } from './shop-info/shop-info.component';
import { AuthGuard } from '../login/services/auth-guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        canActivate: [AuthGuard],
        children: [
          {
            path: 'info',
            component: ShopInfoComponent
          }
        ]
      }
      // { path: 'info', component: ShopInfoComponent }
    ])
  ],
  exports: [RouterModule]
})
export class ShopRoutingModule { 
  
}