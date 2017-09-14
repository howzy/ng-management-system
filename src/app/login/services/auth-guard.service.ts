import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable()
export class AuthGuard implements CanActivate {
  
  constructor(
    private router: Router,
    public loginService: LoginService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // 当前的路由地址
    let url: string = state.url;
    this.loginService.redirectUrl = url;

    let user = sessionStorage.getItem('currentUser');
    if (user) {
      return true;
    }
    // 否则跳转登录页面
    this.router.navigate(['/login']);
    return false;
  }
  
}
