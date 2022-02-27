import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import {CustomBaseControl} from '../custom-base.control';
import {CustomDropdownClearDirective} from './custom-dropdown-clear.directive';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomDropdownComponent extends CustomBaseControl {
  @Input() dataSource: any[] = [];
  @Input() displayFieldName!: string;
  @Input() valueFieldName!: string;

  @Input() clearDirective?: CustomDropdownClearDirective;

  @Output() selectionChange = new EventEmitter();

  @ViewChild('searchInput', { read: ElementRef, static: false }) public searchInput!: ElementRef;

  onOpened(): void {
    this.searchInput?.nativeElement.focus();
    // setTimeout(() => this.searchInput?.nativeElement.focus(), 0);
  }

}
