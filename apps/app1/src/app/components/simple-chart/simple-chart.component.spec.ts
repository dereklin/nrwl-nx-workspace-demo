import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartModule } from 'angular2-highcharts';

import { SimpleChartComponent } from './simple-chart.component';

describe('SimpleChartComponent', () => {
  let component: SimpleChartComponent;
  let fixture: ComponentFixture<SimpleChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ChartModule.forRoot(require('highcharts'))],
      declarations: [SimpleChartComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
