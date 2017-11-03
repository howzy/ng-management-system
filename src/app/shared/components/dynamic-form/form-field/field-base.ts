export class FieldBase<T> {
  value: T;
  key: string;
  label: string;
  required: boolean;
  controlType: string;
  placeholder: string;
  type: string;

  constructor(options: {
    value?: T,
    key?: string,
    label?: string,
    required?: boolean,
    controlType?: string,
    placeholder?: string,
    type?: string
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.controlType = options.controlType || '';
    this.placeholder = options.placeholder || '';
    this.type = options.type || '';
  }
}
