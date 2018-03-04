import { Component, OnInit } from '@angular/core';
import { Tab } from '@nrwl-nx-workspace-demo/tab-nav';

import { COREROUTEBASESPACE } from './core-routing.constants';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {
  public tabs: Tab[];

  constructor() {
    this.tabs = [
      { value: `${COREROUTEBASESPACE}f1`, display: 'Feature 1' },
      { value: `${COREROUTEBASESPACE}f2`, display: 'Feature 2' },
      { value: 'f3', display: 'Feature 3' },
      { value: `${COREROUTEBASESPACE}apollo`, display: 'Apollo' },
      { value: `${COREROUTEBASESPACE}game`, display: 'Apollo Game' },
      { value: `${COREROUTEBASESPACE}learn-graphql`, display: 'Learn Graphql' },
      { value: `${COREROUTEBASESPACE}learn-swiper`, display: 'Learn Swiper' }
    ];
  }

  public ngOnInit() {}
}
