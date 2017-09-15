import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';

import { User } from '../model/user';

@Injectable()
export class LoginService {
  public redirectUrl: string;
  public subject: Subject<User> = new Subject<User>();

  constructor() { }

  public currentUser(): Observable<User> {
    return this.subject.asObservable();
  }

  login(user: User) {
    if (user) {
      let cur: User = Object.assign({
        id: '001',
        token: 'fake-jwt-token',
        headImgUrl: 'assets/imgs/avatar.jpg',
        permissions: [],
        roles: ''
      }, user);
      sessionStorage.setItem('currentUser', JSON.stringify(cur));
      this.subject.next(Object.assign({},cur));
    }
  }

  logout(): void {
    sessionStorage.removeItem('currentUser');
    this.subject.next(Object.assign({}));
  }

}
