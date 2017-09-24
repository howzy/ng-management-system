import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { UploadImageComponent } from "./components/upload-image/upload-image.component";
import { EchartOptionDirective } from './directives/echart-option.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    UploadImageComponent,
    EchartOptionDirective
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UploadImageComponent,
    EchartOptionDirective
  ]
})
export class SharedModule { }
