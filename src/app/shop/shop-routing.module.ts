import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ShopInfoComponent } from './shop-info/shop-info.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'info', component: ShopInfoComponent }
    ])
  ],
  exports: [RouterModule]
})
export class ShopRoutingModule { 
  
}