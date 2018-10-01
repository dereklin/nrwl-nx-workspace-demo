import { async, TestBed } from '@angular/core/testing';
import { ClassToggleOnChangeModule } from './class-toggle-on-change.module';

describe('ClassToggleOnChangeModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ClassToggleOnChangeModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ClassToggleOnChangeModule).toBeDefined();
  });
});
