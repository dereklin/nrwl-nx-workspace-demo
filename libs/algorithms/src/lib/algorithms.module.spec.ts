import { async, TestBed } from '@angular/core/testing';
import { AlgorithmsModule } from './algorithms.module';

describe('AlgorithmsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AlgorithmsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AlgorithmsModule).toBeDefined();
  });
});
