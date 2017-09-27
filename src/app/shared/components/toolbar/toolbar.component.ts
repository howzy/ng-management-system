import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

import { FieldBase } from "../dynamic-form/form-field/field-base";
import { Textbox } from "../dynamic-form/form-field/textbox";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Input('serachList') fields: FieldBase<any>[] = [];
  // 搜索值
  @Output() getSearchList: EventEmitter<any> = new EventEmitter();

  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = this.toFormGroup(this.fields);
  }

  toFormGroup(fields: FieldBase<any>[]) {
    let group: any = {};

    fields.forEach(field => {
      group[field.key] = new FormControl(field.value || '');
    });
    return new FormGroup(group);
  }

  search() {
    this.getSearchList.emit(this.form.value);
  }

}
