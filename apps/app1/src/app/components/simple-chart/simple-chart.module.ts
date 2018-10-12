import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChartModule } from 'angular2-highcharts';

import { SimpleChartComponent } from './simple-chart.component';

@NgModule({
  imports: [CommonModule, ChartModule.forRoot(require('highcharts'))],
  declarations: [SimpleChartComponent],
  exports: [SimpleChartComponent]
})
export class SimpleChartModule {}
