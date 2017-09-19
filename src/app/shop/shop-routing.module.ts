import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard } from '../login/services/auth-guard.service';
import { ShopInfoComponent } from './shop-info/shop-info.component';
import { ShopTypeComponent } from './shop-type/shop-type.component';
import { ShopTypeEditComponent } from './shop-type-edit/shop-type-edit.component';

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
          },
          {
            path: 'type',
            component: ShopTypeComponent,
          },
          {
            path: 'type/edit/:id',
            component: ShopTypeEditComponent
          }
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class ShopRoutingModule { 
  
}