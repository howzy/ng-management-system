import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthGuard } from './login/services/auth-guard.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'shop',
        loadChildren: 'app/shop/shop.module#ShopModule',
      },
    ])
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { 
  
}