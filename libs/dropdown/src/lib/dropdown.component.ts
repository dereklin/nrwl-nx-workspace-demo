import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { DropdownConfig } from './dropdown-config.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent implements OnInit {
  @Input() public config: DropdownConfig;
  @Input() public items: any[] = [];
  @Output() public openDropdown: EventEmitter<void> = new EventEmitter();
  @Output() public selectDropdownItem: EventEmitter<void> = new EventEmitter();
  @Output() public clearDropdown: EventEmitter<void> = new EventEmitter();
  public selectedItem: any = {};

  constructor() {}

  public ngOnInit() {
    this.resetSelectedItem();
  }

  // there are three actions: open, selectItem, and clear
  // we send three events to the parent accordingly: openDropdown, selectDropdownItem, and clearDropdown
  // the parent can decide what to do
  public open() {
    this.openDropdown.emit();
  }

  // when an item is selected, the clear link will shows up
  public selectItem(item) {
    this.selectedItem = item;
    this.selectDropdownItem.emit();
  }

  // when the clear link is cliced, we reset the selected item
  // this causes the clear link to disappear
  public clear() {
    this.resetSelectedItem();
    this.clearDropdown.emit();
  }

  private resetSelectedItem() {
    this.selectedItem = {};
    this.selectedItem[this.config.labelKey] = '';
  }
}
