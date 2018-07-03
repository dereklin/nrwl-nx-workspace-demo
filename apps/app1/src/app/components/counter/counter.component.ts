import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  public counter = 0;
  constructor(private cd: ChangeDetectorRef) {}

  public ngOnInit() {
    setInterval(() => {
      this.counter++;
      this.cd.markForCheck();
    }, 1000);
  }
}
