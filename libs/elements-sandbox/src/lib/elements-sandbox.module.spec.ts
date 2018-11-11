import { async, TestBed } from '@angular/core/testing';
import { ElementsSandboxModule } from './elements-sandbox.module';

describe('ElementsSandboxModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ElementsSandboxModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ElementsSandboxModule).toBeDefined();
  });
});
