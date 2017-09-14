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
      sessionStorage.setItem('currentUser', JSON.stringify(user));
      this.subject.next(Object.assign({},user));
    }
  }

  logout(): void {
    sessionStorage.removeItem('currentUser');
    this.subject.next(Object.assign({}));
  }

}
