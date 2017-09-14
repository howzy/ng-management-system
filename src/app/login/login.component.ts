import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.fb.group({
      userName: [ this.userInfo.userName, [ Validators.required ] ],
      password: [ this.userInfo.password, [ Validators.required ] ],
      remember: [ this.userInfo.remember ]
    })
  }

  doLogin() {
    this.loginService.login(this.loginForm.value);
    this.userInfo = this.loginForm.value;
  }

}
