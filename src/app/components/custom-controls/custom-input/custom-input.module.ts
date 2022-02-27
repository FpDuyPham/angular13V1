import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomInputComponent} from './custom-input.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {CustomBaseControlModule} from '../custom-base-control.module';



@NgModule({
  declarations: [CustomInputComponent],
  exports: [
    CustomInputComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    CustomBaseControlModule
  ]
})
export class CustomInputModule { }
