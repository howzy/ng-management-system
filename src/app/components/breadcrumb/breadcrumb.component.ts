import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { fadeIn } from '../../animations/fade-in';
import { SideBarService } from '../side-bar/services/side-bar.service';
import { SideBar } from '../side-bar/model/menu';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css'],
  animations: [fadeIn]
})
export class BreadcrumbComponent implements OnInit, OnDestroy {
  menu: SideBar = <SideBar>{};
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private sideBarService: SideBarService
  ) { }

  ngOnInit() {
    this.subscription = this.sideBarService.menu.subscribe(menu => {
      this.menu = menu;
    })
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
