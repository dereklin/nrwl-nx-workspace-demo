import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material';
import { AppHighchartsStaticModule } from '@nrwl-nx-workspace-demo/app-highcharts-static';
import { ChartModule } from 'angular2-highcharts';

import { SimpleChartModule } from '../components/simple-chart/simple-chart.module';
import { ReportComponent } from './report.component';

describe('ReportComponent', () => {
  let component: ReportComponent;
  let fixture: ComponentFixture<ReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SimpleChartModule,
        MatCardModule,
        AppHighchartsStaticModule.forRoot([
          require('highcharts/highstock'),
          require('highcharts/modules/treemap'),
          // require('highcharts/modules/exporting'),
          // require('highcharts/modules/export-data'),
          require('highcharts/highcharts-more')
        ]),
        ChartModule
      ],
      declarations: [ReportComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
