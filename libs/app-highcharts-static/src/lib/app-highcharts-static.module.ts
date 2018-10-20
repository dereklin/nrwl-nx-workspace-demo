import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, InjectionToken } from '@angular/core';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import { chain } from 'lodash';
import { slice, compose, forEach } from 'ramda';

const HighChartsModules = new InjectionToken('HighChartsModules');

export function composeHighChartsModules(hcModules) {
  const hc = hcModules[0];
  const wrap = (m) => m(hc);
  // hcModules.filter((_, i) => i > 0).forEach((m) => (m(hc)));
  compose(
    forEach(wrap),
    slice(1, Infinity)
  )(hcModules);
  // chain(hcModules).slice(1, 5).forEach((m) => (m(hc))).value();
  // const hs = require('highcharts/modules/treemap');
  // hs(hc);
  return hc;
}

@NgModule({
  imports: [CommonModule]
})
export class AppHighchartsStaticModule {
  public static forRoot(hcModules: any[]): ModuleWithProviders {
    return {
      ngModule: AppHighchartsStaticModule,
      providers: [
        { provide: HighChartsModules, useValue: hcModules },
        { provide: HighchartsStatic, useFactory: composeHighChartsModules, deps: [HighChartsModules] }
      ]
    };
  }
}
