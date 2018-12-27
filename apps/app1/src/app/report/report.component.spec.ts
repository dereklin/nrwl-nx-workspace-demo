import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material';
import { HighchartsConfigModule } from '@nrwl-nx-workspace-demo/highcharts-config';
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
        HighchartsConfigModule.forRoot('highcharts', [
          'highcharts/modules/treemap',
          'highcharts/modules/exporting',
          'highcharts/modules/export-data',
          'highcharts/highcharts-more'
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
