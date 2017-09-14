import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthGuard } from './login/services/auth-guard.service';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'shop',
        loadChildren: 'app/shop/shop.module#ShopModule',
      },
      // {
      //   path: '',
      //   redirectTo: '/shop/info',
      //   pathMatch: 'full'
      // }
    ])
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { 
  
}