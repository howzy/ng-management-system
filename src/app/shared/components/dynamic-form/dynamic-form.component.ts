import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from "@angular/forms";

import { FieldBase } from "./form-field/field-base";

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Input() field: FieldBase<any>;
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
