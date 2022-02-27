import {Directive, EventEmitter, Input, Output} from '@angular/core';

export interface CustomDropdownClearConfig {
  enable: boolean;

}

@Directive({
  selector: '[appCustomDropdownClear]',
  exportAs: 'baseCustomDropdownClear'
})
export class CustomDropdownClearDirective {
  @Input('appCustomDropdownClear') enable!: boolean;
  // @Input('appCustomDropdownClear') config!: CustomDropdownClearConfig;
  @Output() clear = new EventEmitter();

  constructor() {
  }

  onDeleteClick(index: number): void {
    this.clear.emit(index);
  }

}
