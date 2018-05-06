import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Output
} from '@angular/core';

// won't be used if useSemantic is set to false
declare const $: any;

@Component({
  selector: 'fancy-box',
  templateUrl: './fancy-box.component.html',
  styleUrls: ['./fancy-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FancyBoxComponent implements AfterViewInit, OnInit {
  @Input() public config: any;

  @Output() public orderClick = new EventEmitter();
  @Output() public doubleClick = new EventEmitter();
  @Output() public removeClick = new EventEmitter();

  @HostBinding('class.selectable') public selectable: boolean;
  @HostBinding('class.show-remove-mark') public showRemoveMark: boolean;

  public sizeText;

  constructor(private eRef: ElementRef) {}

  public ngOnInit() {
    this.selectable = this.config.selectable;
    this.showRemoveMark = !this.config.useSemantic && this.config.showRemoveMark;
    this.sizeText = 'test';
  }

  public ngAfterViewInit() {
    if (this.config.useSemantic) {
      setTimeout(() => {
        $(this.eRef.nativeElement).dimmer({
          on: 'hover',
          opacity: 0.2,
          duration: {
            show: 100,
            hide: 100
          }
        });
      }, 100);
    }
  }

  @HostListener('click')
  public onClick() {
    this.orderClick.emit();
  }

  @HostListener('dblclick')
  public onDoubleClick() {
    this.doubleClick.emit();
  }
}
