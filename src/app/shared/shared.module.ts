import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NgZorroAntdModule } from "ng-zorro-antd";

import { UploadImageComponent } from "./components/upload-image/upload-image.component";
import { EchartOptionDirective } from './directives/echart-option.directive';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { PublicFunction } from "./common/public-function";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule.forRoot()
  ],
  declarations: [
    UploadImageComponent,
    EchartOptionDirective,
    ToolbarComponent,
    DynamicFormComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UploadImageComponent,
    EchartOptionDirective,
    ToolbarComponent
  ],
  providers: [PublicFunction]
})
export class SharedModule { }
