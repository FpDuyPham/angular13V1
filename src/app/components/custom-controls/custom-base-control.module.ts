import {NgModule} from '@angular/core';
import {CustomBaseControlValueAccessorDirective} from './custom-base-control-value-accessor.directive';


@NgModule({
  declarations: [CustomBaseControlValueAccessorDirective],
  exports: [
    CustomBaseControlValueAccessorDirective
  ],
  imports: [
  ]
})
export class CustomBaseControlModule { }
