import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  HostBinding,
  OnChanges,
  ChangeDetectorRef
} from '@angular/core';

@Component({
  selector: 'app-glowing-value',
  templateUrl: './glowing-value.component.html',
  styleUrls: ['./glowing-value.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GlowingValueComponent implements OnInit, OnChanges {
  @Input()
  public value: number | string;

  @HostBinding('class.glow')
  private isGlowing;

  constructor(private cd: ChangeDetectorRef) {}

  public ngOnChanges() {
    this.isGlowing = true;
    setTimeout(() => {
      this.isGlowing = false;
      this.cd.markForCheck();
    }, 1000);
  }
  public ngOnInit() {}
}
