import { Component, OnInit } from '@angular/core';

import { LoginService } from './login/services/login.service';
import { User } from './login/model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  user: User;

  constructor(
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('currentUser'));
    this.loginService.currentUser().subscribe(user => {
      this.user = user;
    })
  }
  
}
