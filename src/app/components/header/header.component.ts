import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd';

import { User } from '../../login/model/user';
import { LoginService } from '../../login/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() user: User;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private confirmServ: NzModalService
  ) { }

  ngOnInit() {
  }

  goToUserProfile() {
    this.router.navigate(['/user-profile']);
  }

  logout() {
    this.confirmServ.confirm({
      title: '您是否确认要注销？',
      onOk: () => {
        this.loginService.logout();
        this.router.navigate(['/login']);
      }
    })
  }
}
