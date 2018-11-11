import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsSandboxComponent } from './elements-sandbox.component';

describe('ElementsSandboxComponent', () => {
  let component: ElementsSandboxComponent;
  let fixture: ComponentFixture<ElementsSandboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ElementsSandboxComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementsSandboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
