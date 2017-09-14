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
    debugger;
    this.loginService.currentUser
      .subscribe(data => {
        if (data) {
          return true;
        }
      })
    this.router.navigate(['/login']);
    return false;
  }
  
}
