import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassToggleOnChangeComponent } from './class-toggle-on-change.component';

describe('ClassToggleOnChangeComponent', () => {
  let component: ClassToggleOnChangeComponent;
  let fixture: ComponentFixture<ClassToggleOnChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClassToggleOnChangeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassToggleOnChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
