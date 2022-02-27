import {Directive, forwardRef, Optional} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl} from '@angular/forms';


const noop = () => {
};


export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CustomBaseControlValueAccessorDirective),
  multi: true
};



@Directive({
  selector: '[appControlValueAccessor]',
  exportAs: 'baseControlValueAccessor',
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class CustomBaseControlValueAccessorDirective implements ControlValueAccessor {

  _controlValue: any;
  get controlValue(): any {
    return this._controlValue;
  }

  set controlValue(val) {
    this._controlValue = val;
    this.onChangeCallback(this._controlValue);
  }

  private onChangeCallback: (_: any) => void = noop;
  private onTouchedCallback: () => void = noop;

  constructor(
    // Retrieve the dependency only from the local injector,
    // not from parent or ancestors.
    // @Self()
    // We want to be able to use the component without a form,
    // so we mark the dependency as optional.
    @Optional()
    private ngControl: NgControl
  ) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: any): void {
    this.controlValue = obj;
  }
}
