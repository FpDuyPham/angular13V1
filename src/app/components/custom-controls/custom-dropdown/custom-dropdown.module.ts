import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomDropdownComponent} from './custom-dropdown.component';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {CustomInputModule} from '../custom-input/custom-input.module';
import {MatIconModule} from '@angular/material/icon';
import {CustomBaseControlModule} from '../custom-base-control.module';
import {SharedDirectiveModule} from '../../../directives/shared-directive.module';
import {MatButtonModule} from '@angular/material/button';
import {CustomDropdownClearDirective} from './custom-dropdown-clear.directive';


@NgModule({
  declarations: [CustomDropdownComponent, CustomDropdownClearDirective],
  exports: [
    CustomDropdownComponent,
    CustomDropdownClearDirective
  ],
  imports: [
    CommonModule,
    MatOptionModule,
    MatSelectModule,
    CustomInputModule,
    MatIconModule,
    CustomBaseControlModule,
    SharedDirectiveModule,
    MatButtonModule,
    SharedDirectiveModule,
  ]
})
export class CustomDropdownModule { }
