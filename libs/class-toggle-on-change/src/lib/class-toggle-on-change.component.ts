import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  Input,
  OnChanges,
  OnInit
} from '@angular/core';

@Component({
  selector: 'nrwl-nx-workspace-demo-class-toggle-on-change',
  templateUrl: './class-toggle-on-change.component.html',
  styleUrls: ['./class-toggle-on-change.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClassToggleOnChangeComponent implements OnInit, OnChanges {
  @Input() public value: number | string;

  @Input() public className: string;

  @Input() public duration: number = 1000;

  @HostBinding('class') private myClass;

  constructor(private cd: ChangeDetectorRef) {
    this.myClass = '';
  }

  public ngOnInit() {}

  public ngOnChanges() {
    this.myClass = this.className;
    setTimeout(() => {
      this.myClass = '';
      this.cd.markForCheck();
    }, this.duration);
  }
}
