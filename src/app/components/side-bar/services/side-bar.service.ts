import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Menu, SideBar } from '../model/menu';

@Injectable()
export class SideBarService {
  public subjectMenu: Subject<SideBar> = new Subject<SideBar>();

  constructor(
    private http: Http
  ) { }

  public get menu(): Observable<SideBar> {
    return this.subjectMenu.asObservable();
  }

  selectMenu(menu: SideBar) {
    this.subjectMenu.next(Object.assign({}, menu));
  }

  getMenu(): Observable<Menu> {
    let url = 'mock-data/menu.json';
    return this.http.get(url).map(res => res.json());
  }

}
