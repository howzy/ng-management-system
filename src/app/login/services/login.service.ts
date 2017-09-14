import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { User } from '../model/user';

@Injectable()
export class LoginService {
  subject: Subject<User> = new Subject<User>();

  constructor() { }

  public get currentUser(): Observable<User> {
    return this.subject.asObservable();
  }

  login(user: User) {
    if (user) {
      sessionStorage.setItem('currentUser', JSON.stringify(user));
      this.subject.next(Object.assign({}, user));
    }
  }

  logout() {
    sessionStorage.removeItem('currentUser');
    this.subject.next(Object.assign({}));
  }

}
