import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'shop',
        loadChildren: 'app/shop/shop.module#ShopModule'
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}