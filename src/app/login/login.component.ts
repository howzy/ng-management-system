import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from './model/user';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  userInfo: User = <User>{};

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.fb.group({
      userName: [ this.userInfo.userName, [ Validators.required ] ],
      password: [ this.userInfo.password, [ Validators.required ] ],
      rememberMe: [ this.userInfo.rememberMe ]
    })
  }

  doLogin() {
    for (const i in this.loginForm.controls) {
      this.loginForm.controls[ i ].markAsDirty();
    }

    if (this.loginForm.invalid) return;

    this.userInfo = this.loginForm.value;
    this.loginService.login(this.loginForm.value);
    
    // 重定向到跳转登录页面时的路径
    let redirectUrl = this.loginService.redirectUrl || '/';
    this.router.navigate([redirectUrl]);
  }

}
