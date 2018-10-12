import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-simple-chart',
  templateUrl: './simple-chart.component.html',
  styleUrls: ['./simple-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleChartComponent implements OnInit {
  public options;

  constructor() {
    this.options = {
      title: { text: 'simple chart' },
      series: [
        {
          data: [29.9, 71.5, 106.4, 129.2]
        }
      ]
    };
  }

  public ngOnInit() {}
}
