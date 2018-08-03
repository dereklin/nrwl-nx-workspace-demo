import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  public counter = 0;
  public changed = false;

  constructor(private cd: ChangeDetectorRef) {}

  public ngOnInit() {
    setInterval(() => {
      this.counter++;
      this.changed = true;
      setTimeout(() => {
        this.changed = false;
        this.cd.markForCheck();
      }, 1000);
      this.cd.markForCheck();
    }, 2000);
  }
}
