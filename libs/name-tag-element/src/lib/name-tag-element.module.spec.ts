import { async, TestBed } from '@angular/core/testing';
import { NameTagElementModule } from './name-tag-element.module';

describe('NameTagElementModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NameTagElementModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NameTagElementModule).toBeDefined();
  });
});
