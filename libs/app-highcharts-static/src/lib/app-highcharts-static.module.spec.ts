import { async, TestBed } from '@angular/core/testing';
import { AppHighchartsStaticModule } from './app-highcharts-static.module';

describe('AppHighchartsStaticModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppHighchartsStaticModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AppHighchartsStaticModule).toBeDefined();
  });
});
