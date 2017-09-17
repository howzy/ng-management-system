import { Component, OnInit } from '@angular/core';

import { SideBarService } from './services/side-bar.service';
import { Menu, SideBar } from './model/menu';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  menu: Menu;

  constructor(
    private sideBarService: SideBarService
  ) { }

  ngOnInit() {
    this.sideBarService.getMenu().subscribe(res => {
      this.menu = res;
    })
  }

  selectMenu(menu: Menu, subIndex: number, tertiaryIndex?: number) {
    let detail: SideBar = {
      icon: menu.icon,
      title: menu.title,
      subTitle: menu.subs[subIndex].title,
    };
    if (tertiaryIndex || tertiaryIndex == 0) {
      detail["tertiaryTitle"] = menu.subs[subIndex]["subs"][tertiaryIndex].title;
    }
    this.sideBarService.selectMenu(detail);
  }

}
