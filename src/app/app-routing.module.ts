import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthGuard } from './login/services/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'user-profile',
        component: UserProfileComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'shop',
        loadChildren: 'app/shop/shop.module#ShopModule'
      },
      {
        path: 'order',
        loadChildren: 'app/order/order.module#OrderModule'
      }
    ])
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { 
  
}