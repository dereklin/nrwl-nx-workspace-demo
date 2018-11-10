import { CommonModule } from '@angular/common';
import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import { forEach } from 'ramda';

const HIGHCHARTS_STATICS_DEPS = new InjectionToken('HIGH_CHARTS_STATICS_DEPS');

export function requireHcModule(m: string) {
  // this is manual because require(variable) doesn't work
  // we can't pass require('highcharts/modules/treemap') from app.module in aot mode
  if (m === 'highcharts/modules/treemap') {
    return require('highcharts/modules/treemap');
  }
  if (m === 'highcharts/modules/exporting') {
    return require('highcharts/modules/exporting');
  }
  if (m === 'highcharts/modules/export-data') {
    return require('highcharts/modules/export-data');
  }
  if (m === 'highcharts/highcharts-more') {
    return require('highcharts/highcharts-more');
  }
}

export function composeHighChartsModules(deps) {
  const { chartType, hcModules } = deps;
  let hc;
  if (chartType === 'highstock') {
    hc = require('highcharts/highstock');
  } else {
    hc = require('highcharts');
  }
  const wrap = (m) => m(hc);
  forEach(wrap)(hcModules.map(requireHcModule));
  return hc;
}

@NgModule({
  imports: [CommonModule]
})
export class HighchartsConfigModule {
  public static forRoot(
    chartType: 'highcharts' | 'highstock',
    hcModules: Array<
      | 'highcharts/modules/treemap'
      | 'highcharts/modules/exporting'
      | 'highcharts/modules/export-data'
      | 'highcharts/highcharts-more'
    > = []
  ): ModuleWithProviders {
    return {
      ngModule: HighchartsConfigModule,
      providers: [
        { provide: HIGHCHARTS_STATICS_DEPS, useValue: { chartType, hcModules } },
        { provide: HighchartsStatic, useFactory: composeHighChartsModules, deps: [HIGHCHARTS_STATICS_DEPS] }
      ]
    };
  }
}
