import { SimpleChartModule } from './simple-chart.module';

describe('SimpleChartModule', () => {
  let simpleChartModule: SimpleChartModule;

  beforeEach(() => {
    simpleChartModule = new SimpleChartModule();
  });

  it('should create an instance', () => {
    expect(simpleChartModule).toBeTruthy();
  });
});
