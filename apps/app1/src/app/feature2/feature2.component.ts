import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature2',
  templateUrl: './feature2.component.html',
  styleUrls: ['./feature2.component.scss']
})
export class Feature2Component implements OnInit {
  public now;

  public toState = 'state1';

  constructor() {
    // this.now = DateTime.local();
  }

  public ngOnInit() { }

  public changeState(state) {
    this.toState = state;
  }
}
