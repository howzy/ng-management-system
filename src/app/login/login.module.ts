import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginService } from './services/login.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgZorroAntdModule.forRoot(),
    LoginRoutingModule
  ],
  declarations: [LoginComponent],
  providers: [LoginService]
})
export class LoginModule { }
