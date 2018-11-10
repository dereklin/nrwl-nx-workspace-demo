import { async, TestBed } from '@angular/core/testing';
import { HighchartsConfigModule } from './highcharts-config.module';

describe('HighchartsConfigModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HighchartsConfigModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(HighchartsConfigModule).toBeDefined();
  });
});
