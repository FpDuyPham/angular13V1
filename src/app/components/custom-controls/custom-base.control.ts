import {Component, Input} from '@angular/core';

// @Injectable()
// @Directive()
@Component({
  template: ''
})
export abstract class InputBase {
  @Input() label?: string;
  @Input() placeHolder?: string;
  @Input() defaultValue?: string;

  constructor() {
  }
}



// @Injectable()
@Component({
  template: ''
})
export abstract class CustomBaseControl extends InputBase {

}
